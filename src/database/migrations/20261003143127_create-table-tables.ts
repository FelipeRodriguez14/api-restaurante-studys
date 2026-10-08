import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('tables', (table)=>{
    table.increments('id').primary(),
    table.text('status').defaultTo('FECHADA').notNullable
  })
}


export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('tables')
}

