import dotenv from 'dotenv'
import { Config } from './types/config'

// load data from .env file to process.env
dotenv.config()

export const isProduction = process.env.NODE_ENV === 'production'

export const config: Config = {
  log: {
    // default to 2MB
    maxSize: Number.parseInt(process.env.LOG_MAX_SIZE) || 1024 * 1024 * 2,
  },
}
