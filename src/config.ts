import 'dotenv/config';
import { Config } from './types/config';

export const isProduction = process.env.NODE_ENV === 'production';

export const config: Config = {
  log: {
    maxSize: Number.parseInt(process.env.LOG_MAX_SIZE ?? '') || 1024 * 1024 * 2,
  },
};
