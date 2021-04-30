import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";
import { credentials } from './credentials'; // private credentials file

const client = new DynamoDBClient({ 
  region: "us-east-2",
  credentials: credentials,
});

export async function saveEmailAddress(email) {
  const putParams = {
    TableName: 'cpi-mailing-list',
    Item: {
      'UserId': {'S': email}, 
      'Email': {'S': email},
    }
  };
  const command = new PutItemCommand(putParams);
  try {
    const data = await client.send(command);
    console.log('Success');
    console.log(data);

    return true;
  } catch (error) {
    console.log(error);

    return false;
  }
}