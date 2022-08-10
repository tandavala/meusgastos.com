import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("users", function (table) {
    table.increments();
    table.string("uuid");
    table.string("user_name");
    table.string("email");
    table.timestamps();
  });
}

export async function down(knex: Knex): Promise<void> {}
