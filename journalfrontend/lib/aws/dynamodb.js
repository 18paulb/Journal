import {
    DynamoDBClient,
} from "@aws-sdk/client-dynamodb";

import { PutCommand, DynamoDBDocumentClient, BatchGetCommand, GetCommand, QueryCommand } from "@aws-sdk/lib-dynamodb";

const table_name = "JournalEntry"

const client = new DynamoDBClient({})
const docClient = DynamoDBDocumentClient.from(client);

export async function writeJournalEntry(entryText, entryTitle, date, email) {

    let command = new PutCommand({
        TableName: table_name,
        Item: {
            date: date,
            email: email,
            entry: entryText,
            title: entryTitle
        }
    })

    await docClient.send(command);
}

export async function getJournalEntries(email) {
    const command = new QueryCommand({
        TableName: table_name,
        KeyConditionExpression:
          "email = :email",
        ExpressionAttributeValues: {
          ":email": email,
        },
        ConsistentRead: true,
      });

      const response = await docClient.send(command);

      return response.Items;
}

export async function getJournalEntry(key, email) {
    const command = new GetCommand({
        TableName: table_name,
        Key: {
          email: email,
          date: key
        },
      });
    
      const response = await docClient.send(command);
      return response.Item;
}

export async function getJournalEntryCount(email) {
  let totalCount = 0;
  let lastEvaluatedKey = undefined;

  do {
    const params = {
      TableName: table_name,
      KeyConditionExpression: "email = :email",
      ExpressionAttributeValues: {
        ":email": email
      },
      Select: "COUNT",
      ExclusiveStartKey: lastEvaluatedKey
    };

    const command = new QueryCommand(params);
    const response = await client.send(command);
    
    totalCount += response.Count;
    
    lastEvaluatedKey = response.LastEvaluatedKey;
    
  } while (lastEvaluatedKey);

  return totalCount;
}