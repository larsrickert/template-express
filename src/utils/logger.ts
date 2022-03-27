import fs from 'fs/promises';
import path from 'path';
import { config, isProduction } from '../config';
import { Logger } from '../types/logger';
import { getTimestamp } from './dates';

const logDir = path.join(__dirname, '../../logs/');
const textEncoder = new TextEncoder();

async function writeToLogfile(path: string, data: string) {
  try {
    await fs.mkdir(logDir, { recursive: true });

    try {
      const fileSize = (await fs.stat(path)).size;
      const dataSize = textEncoder.encode(data).length;

      if (fileSize + dataSize > config.log.maxSize) {
        // logfile size limit reached, clear file
        await fs.writeFile(
          path,
          `${getTimestamp()}: Logfile exceeded max. size of ${
            config.log.maxSize
          } bytes, cleared logfile \n${data}`
        );
      } else {
        // logfile size not reached
        await fs.appendFile(path, data);
      }
    } catch (e) {
      // simply create logfile if it does not exist
      await fs.appendFile(path, data);
    }
  } catch (e) {
    // do not throw error in logger, app should not crash when logging fails
    console.error(`Error while writing to logfile ${path}`, e);
  }
}

export function createLogger(): Logger {
  const logFilePath = path.join(logDir, 'logs.txt');
  const errorLogFilePath = path.join(logDir, 'errors.txt');

  return {
    log: async (message) => {
      const msg = `${getTimestamp()}: ${message}`;
      console.log(msg);
      await writeToLogfile(logFilePath, `${msg}\n`);
    },
    error: async (message) => {
      const msg = `${getTimestamp()}: ***ERROR*** ${message}`;
      console.error(msg);
      await writeToLogfile(errorLogFilePath, `${msg}\n`);
    },
    debug: (message) => {
      if (isProduction) return;
      console.log(`${getTimestamp()}: ***DEBUG*** ${message}`);
    },
  };
}
