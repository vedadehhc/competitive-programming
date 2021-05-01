import  { PutItemCommand } from '@aws-sdk/client-dynamodb';
import { PublishCommand } from "@aws-sdk/client-sns";

import { v4 as uuidv4 } from 'uuid';

import { dynamoClient, snsClient } from './awsConfig';
import getUserData from './getUserData';

const TABLE_NAME = 'cpi-form-responses';
const TOPIC_ARN = 'arn:aws:sns:us-east-2:042242103208:cpi-mailing-list-updates';

async function formResponseDynamo(emailAddress, firstname, lastname, content) {
  try {
    const uuid = uuidv4();

    let userData = {};
    try{
      userData = await getUserData();
    } catch (err) {
      console.log("User data error", err);
      userData = {};
    }

    const putParams = {
      TableName: TABLE_NAME,
      Item: {
        id: {'S': uuid},
        fname: {'S' : firstname},
        lname: {'S' : lastname},
        email: {'S' : emailAddress},
        message: {'S' : content},
        ...userData,
      },
    };

    const data = await dynamoClient.send(new PutItemCommand(putParams));

    console.log("Dynamo Put success:", data);

    try {
      const messageParams = {
        Subject: 'New form response at cpicamp.com',
        Message: `New form response: ${uuid}\n Email Address: ${emailAddress}\n Name: ${firstname} ${lastname}\n Message: ${content}`,
        TopicArn: TOPIC_ARN,
      }

      const messageData = await snsClient.send(new PublishCommand(messageParams));
      console.log("SNS success:", messageData);

    } catch (err) {
      console.log("SNS error", err);
    }

    return {success: true, message: "Success! We'll get back to you as soon as possible."};
  } catch (err) {
    console.log("Dynamo Put error", err);
    return {success: false, message: "There was an unexpected error. Please try again."};
  }
}

export default formResponseDynamo;