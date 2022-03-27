export interface Logger {
  log(message: unknown): Promise<void>;
  error(message: unknown): Promise<void>;
  debug(message: unknown): void;
}
