import { RequestHandler } from "express";

export const find: RequestHandler = (req, res) => {
  const data = [
    {
      id: 1,
      message: "Hello World",
    },
  ];
  res.send(data);
};
