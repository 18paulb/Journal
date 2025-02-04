import { createClient } from 'redis';

export async function getRedisClient() {
    // Get Redis connection details from environment variables
    const redisHost = process.env.REDIS_HOST || 'localhost';  // Default to localhost if not set
    const redisPort = parseInt(process.env.REDIS_PORT ?? '6379');        // Default to 6379 if not set
    
    const redisClient = createClient({
        socket: {
            host: redisHost,
            port: redisPort
        }
    });
    await redisClient.connect();
    return redisClient
}