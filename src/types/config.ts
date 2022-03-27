export interface Config {
  app: {
    port: number;
  };
  log: {
    /** Max size of the logfile in bytes */
    maxSize: number;
  };
}
