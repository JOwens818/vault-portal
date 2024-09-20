import { User } from '@/types';
import redisConnect from './db';
import { v4 as uuidv4 } from 'uuid';

const createSession = async (user: User): Promise<string> => {
  const sessionId: string = uuidv4();
  const client = await redisConnect();
  await client.hSet(sessionId, 'username', user.username!, 'email', user.email!, 'token', user.token!);
  return sessionId;
};
