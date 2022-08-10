module.exports = {
  client: "mysql2",
  connection: {
    host: "localhost",
    user: "dev",
    password: "dev",
    database: "meusgastos",
  },
  migrations: {
    extension: "ts",
    directory: "../migrations",
  },
};
