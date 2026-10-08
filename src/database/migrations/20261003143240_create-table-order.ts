import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('orders', (table)=>{
    table.increments('id').primary(),
    table.integer('table_id').notNullable().references('id').inTable('tables'),
    table.float('total').notNullable()
    table.timestamp('data').defaultTo(knex.fn.now())
  })
}


export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('orders')
}

