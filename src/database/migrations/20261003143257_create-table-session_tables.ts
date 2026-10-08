import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('session_tables', (table)=>{
    table.increments('id').primary(),
    table.integer('order_id').notNullable().references('id').inTable('orders'),
    table.integer('table_id').notNullable().references('id').inTable('tables'),
    table.time('tm_open'),
    table.time('tm_close'),
    table.time('tm_stay')
  })
}


export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('session_tables')
}

