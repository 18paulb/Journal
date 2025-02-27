import { DynamoDBClient } from '@aws-sdk/client-dynamodb';

import {
  PutCommand,
  DynamoDBDocumentClient,
  GetCommand,
  QueryCommand,
} from '@aws-sdk/lib-dynamodb';

const tableName = 'JournalEntry';
const dateIndex = 'date-email-index';

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

export async function writeJournalEntry(entryText, entryTitle, date, email, isPublic = false) {
  let command = new PutCommand({
    TableName: tableName,
    Item: {
      date: date,
      email: email,
      entry: entryText,
      title: entryTitle,
      isPublic: isPublic,
    },
  });

  await docClient.send(command);
}

export async function getJournalEntries(email) {
  const command = new QueryCommand({
    TableName: tableName,
    KeyConditionExpression: 'email = :email',
    ExpressionAttributeValues: {
      ':email': email,
    },
    ConsistentRead: true,
    ScanIndexForward: false,
  });

  const response = await docClient.send(command);

  return response.Items ?? [];
}

export async function getDailyPublicJournalEntries(date) {
  const command = new QueryCommand({
    TableName: tableName,
    IndexName: dateIndex,
    KeyConditionExpression: '#date = :date',
    ExpressionAttributeNames: {
      '#date': 'date',
    },
    ExpressionAttributeValues: {
      ':date': date,
      ':isPublic': true,
    },
    FilterExpression: 'isPublic = :isPublic',
  });

  try {
    const response = await docClient.send(command);
    return response.Items || [];
  } catch (error) {
    console.error('Error fetching public journal entries:', error);
    return [];
  }
}

export async function getJournalEntry(key, email) {
  const command = new GetCommand({
    TableName: tableName,
    Key: {
      email: email,
      date: key,
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
      TableName: tableName,
      KeyConditionExpression: 'email = :email',
      ExpressionAttributeValues: {
        ':email': email,
      },
      Select: 'COUNT',
      ExclusiveStartKey: lastEvaluatedKey,
    };

    const command = new QueryCommand(params);
    const response = await client.send(command);

    totalCount += response.Count;

    lastEvaluatedKey = response.LastEvaluatedKey;
  } while (lastEvaluatedKey);

  return totalCount;
}
