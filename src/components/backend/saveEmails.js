import  { DynamoDB, PutItemCommand } from '@aws-sdk/client-dynamodb';
import { SNSClient, PublishCommand } from "@aws-sdk/client-sns";
import {CognitoIdentityClient} from '@aws-sdk/client-cognito-identity';
import { fromCognitoIdentityPool } from '@aws-sdk/credential-provider-cognito-identity';

const REGION = "us-east-2";
const IDENTITY_POOL_ID = 'us-east-2:b05bf792-94ce-484b-94ed-dba2e934eab2';

const dynamoClient = new DynamoDB({
  region: REGION, 
  credentials: fromCognitoIdentityPool({
    client: new CognitoIdentityClient({ region: REGION }),
    identityPoolId: IDENTITY_POOL_ID,
  }),
});

const snsClient = new SNSClient({
  region: REGION,
  credentials: fromCognitoIdentityPool({
    client: new CognitoIdentityClient({ region: REGION }),
    identityPoolId: IDENTITY_POOL_ID,
  }),
});

async function saveEmailDynamo(emailAddress) {
  const TABLE_NAME = 'cpi-mailing-list';
  const TOPIC_ARN = 'arn:aws:sns:us-east-2:042242103208:cpi-mailing-list-updates';

  const params = {
    TableName: TABLE_NAME,
    Item: {
      'id': {S: emailAddress},
      'email': {S : emailAddress},
    },
  };

  try {
    const data = await dynamoClient.send(new PutItemCommand(params));

    console.log("Dynamo success:", data);

    try {
      const messageParams = {
        Subject: 'New Subscription to cpi-mailing-list',
        Message: `A new person just subscribed to the mailing list: ${emailAddress}`,
        TopicArn: TOPIC_ARN,
      }

      const messageData = await snsClient.send(new PublishCommand(messageParams));
      console.log("SNS Success:", messageData);

    } catch (err) {
      console.log(err);
    }

    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}

// 
async function saveEmailAPI(emailAddress) {
  const data = JSON.stringify({
    id: emailAddress, 
    email: emailAddress,
  });

  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: data,
  }

  try {
    // uses api gateway. this api is now deleted, won't work. 
    // also requires a lambda function to be set up (which connects api to dynamodb). now deleted.
    const res = await fetch('https://9yzau83wvg.execute-api.us-east-2.amazonaws.com/items', options);

    console.log(res);
    return true;
  } catch(err) {
    console.log(err);
    return false;
  }
} 

export default saveEmailDynamo;