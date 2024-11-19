import { createClient } from 'redis';

export async function getRedisClient() {
    const redisClient = createClient();
    await redisClient.connect();
    return redisClient
}