import { DynamoDBClient } from '@aws-sdk/client-dynamodb';

import {
  PutCommand,
  DynamoDBDocumentClient,
  GetCommand,
  QueryCommand,
} from '@aws-sdk/lib-dynamodb';
import DatabaseError from '../error/db-error';
import { StatusCodeEnum } from '../enums/status-code';
import InvalidParamsError from '../error/invalid-params';

const tableName = 'JournalEntry';
const dateIndex = 'date-email-index';

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

export async function writeJournalEntry(entryText, entryTitle, date, email, isPublic = false) {

  if (!email || !date) return new InvalidParamsError("Missing required db keys", StatusCodeEnum.BAD_REQUEST)

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

  try {
    await docClient.send(command);
  } catch {
    throw new DatabaseError("Error inserting journal", StatusCodeEnum.INTERNAL_SERVER_ERROR)
  }
}

export async function getJournalEntries(email) {

  if (!email) throw new InvalidParamsError("Email is in an invalid format", StatusCodeEnum.BAD_REQUEST)

  const command = new QueryCommand({
    TableName: tableName,
    KeyConditionExpression: 'email = :email',
    ExpressionAttributeValues: {
      ':email': email,
    },
    ConsistentRead: true,
    ScanIndexForward: false,
  });

  try {
    const response = await docClient.send(command);
    return response.Items ?? [];
  } catch {
    throw new DatabaseError("Error getting journal entries", StatusCodeEnum.INTERNAL_SERVER_ERROR)
  }
}

export async function getDailyPublicJournalEntries(date) {

  if (!date) throw new InvalidParamsError("Date is in an invalid format", StatusCodeEnum.BAD_REQUEST)

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
  } catch  {
    throw new DatabaseError("Error fetching public journals", StatusCodeEnum.INTERNAL_SERVER_ERROR)
  }
}

export async function getJournalEntry(date, email) {

  if (!date || !email) throw new InvalidParamsError("Date or email is in invalid format", StatusCodeEnum.BAD_REQUEST)

  const command = new GetCommand({
    TableName: tableName,
    Key: {
      email: email,
      date: date,
    },
  });

  try {
    const response = await docClient.send(command);
    return response.Item;
  } catch {
    throw new DatabaseError("error fething journal entry", StatusCodeEnum.INTERNAL_SERVER_ERROR)
  }
}

export async function getJournalEntryCount(email) {

  if (!email) throw new InvalidParamsError("Email in invalid format", StatusCodeEnum.BAD_REQUEST)

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
