require("dotenv").config();

export const config = {
  port: process.env.PORT || 8080,
  database_uri: process.env.DATABASE_URI as string,
};
