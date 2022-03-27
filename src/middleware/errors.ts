import { ErrorRequestHandler } from 'express';
import { logger } from '../server';

/**
 * Creates a error log for every unhandled application error and sends http code 500.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const errorMiddleware: ErrorRequestHandler = (err, req, res, next) => {
  logger.error(`Unhandled application error on route ${req.path}, ${err.stack}`);

  res.status(500).send({
    message: 'An internal error occured.',
  });
};

export default errorMiddleware;
