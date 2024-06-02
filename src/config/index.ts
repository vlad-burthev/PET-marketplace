export default () => ({
  db_dialect: process.env.DB_DIALECT,
  db_port: Number(process.env.DB_PORT),
  db_host: process.env.DB_HOST,
  db_username: process.env.DB_USERNAME,
  db_password: process.env.DB_PASSWORD,
  db_database: process.env.DB_NAME,
});
