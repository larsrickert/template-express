import { RequestHandler } from 'express';

const indexRouteGetHandler: RequestHandler = (_, res) => {
  res.send({ data: 'Hello from the node template API.' });
};

export default indexRouteGetHandler;
