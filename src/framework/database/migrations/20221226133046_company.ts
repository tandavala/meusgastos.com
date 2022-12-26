import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("companies", function (table) {
    table.increments();
    table.string("uuid");
    table.string("user_name");
    table.string("email");
    table.boolean("is_deleted").defaultTo(false);
    table.timestamps();
  });
}

export async function down(knex: Knex): Promise<void> {}
