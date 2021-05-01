import  { DynamoDB, PutItemCommand } from '@aws-sdk/client-dynamodb';
import {CognitoIdentityClient} from '@aws-sdk/client-cognito-identity';
import { fromCognitoIdentityPool } from '@aws-sdk/credential-provider-cognito-identity';

const REGION = "us-east-2";
const IDENTITY_POOL_ID = 'us-east-2:b05bf792-94ce-484b-94ed-dba2e934eab2';

const client = new DynamoDB({
  region: REGION, 
  credentials: fromCognitoIdentityPool({
    client: new CognitoIdentityClient({ region: REGION }),
    identityPoolId: IDENTITY_POOL_ID,
  }),
});

async function saveEmailDynamo(emailAddress) {
  const TABLE_NAME = 'cpi-mailing-list';

  const params = {
    TableName: TABLE_NAME,
    Item: {
      'id': {S: emailAddress},
      'email': {S : emailAddress},
    },
  };

  try {
    const data = await client.send(new PutItemCommand(params));

    console.log(data);
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