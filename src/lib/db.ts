import { createClient } from 'redis';

type RedisClientConnection = ReturnType<typeof createClient>;
let redisClient: RedisClientConnection;

const redisConnect = async (): Promise<RedisClientConnection> => {
  if (!redisClient) {
    redisClient = createClient()
      .on('connect', () => console.log('Connected to Redis'))
      .on('error', (err) => console.error('Redis Client Error', err));
  }

  if (!redisClient?.isOpen) {
    await redisClient?.connect();
  }

  return redisClient;
};

export default redisConnect;
