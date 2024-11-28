import {
    DynamoDBClient,
    GetItemCommand,
} from "@aws-sdk/client-dynamodb";

import { PutCommand, DynamoDBDocumentClient, BatchGetCommand, QueryCommand, GetCommand } from "@aws-sdk/lib-dynamodb";

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

    const data = await docClient.send(command);
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