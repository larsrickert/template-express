import { ErrorRequestHandler } from "express";

/**
 * Creates a error log for every unhandled application error and sends http code 500.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const errorMiddleware: ErrorRequestHandler = (err, req, res, next) => {
  res.status(500).send({
    message: "An unknown internal error occurred.",
  });
};

export default errorMiddleware;
