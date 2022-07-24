import "dotenv/config";

export const config = {
  app: {
    port: Number.parseInt(process.env.PORT ?? "") || 3000,
  },
};
