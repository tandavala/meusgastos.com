import knex from "knex";
const connection = require("./connection");

const Database = knex(connection);
export default Database;
