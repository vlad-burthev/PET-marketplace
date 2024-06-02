interface I_DBConnectionConfig {
  dialect: string;
  port: number;
  host: string;
  username: string;
  password: string;
  database: string;
}

export const dbConnectionConfig: I_DBConnectionConfig = {
  dialect: process.env.DB_DIALECT,
  port: Number(process.env.DB_PORT),
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};
