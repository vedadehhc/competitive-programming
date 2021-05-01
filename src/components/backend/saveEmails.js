import  { PutItemCommand, GetItemCommand } from '@aws-sdk/client-dynamodb';
import { PublishCommand } from "@aws-sdk/client-sns";

import { dynamoClient, snsClient } from './awsConfig';
import getUserData from './getUserData';

const TABLE_NAME = 'cpi-mailing-list';
const TOPIC_ARN = 'arn:aws:sns:us-east-2:042242103208:cpi-mailing-list-updates';

async function saveEmailDynamo(emailAddress) {

  try {
    const getParams = {
      TableName: TABLE_NAME,
      Key: {
        id: {'S': emailAddress},
      },
    }

    const getData = await dynamoClient.send(new GetItemCommand(getParams));

    console.log("Dynamo Get success", getData);
    if(getData.Item) {
      return {success: true, message: "You are already subscribed!"};
    }
  } catch (err) {
    console.log("Dynamo Get error", err);
  }

  try {
    
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
        'id': {S: emailAddress},
        'email': {S : emailAddress},
        ...userData,
      },
    };

    const data = await dynamoClient.send(new PutItemCommand(putParams));

    console.log("Dynamo Put success:", data);

    try {
      const messageParams = {
        Subject: 'New Subscription to cpi-mailing-list',
        Message: `A new person just subscribed to the mailing list: ${emailAddress}`,
        TopicArn: TOPIC_ARN,
      }

      const messageData = await snsClient.send(new PublishCommand(messageParams));
      console.log("SNS success:", messageData);

    } catch (err) {
      console.log("SNS error", err);
    }

    return {success: true, message: "Success! You are now on our mailing list."};
  } catch (err) {
    console.log("Dynamo Put error", err);
    return {success: false, message: "There was an unexpected error. Please try again."};
  }
}

// 
// async function saveEmailAPI(emailAddress) {
//   const data = JSON.stringify({
//     id: emailAddress, 
//     email: emailAddress,
//   });

//   const options = {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: data,
//   }

//   try {
//     // uses api gateway. this api is now deleted, won't work. 
//     // also requires a lambda function to be set up (which connects api to dynamodb). now deleted.
//     const res = await fetch('https://9yzau83wvg.execute-api.us-east-2.amazonaws.com/items', options);

//     console.log(res);
//     return true;
//   } catch(err) {
//     console.log(err);
//     return false;
//   }
// } 

export default saveEmailDynamo;