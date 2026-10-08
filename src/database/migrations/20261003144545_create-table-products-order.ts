import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('products_order', (table)=>{
    table.increments('id').primary(),
    table.integer('order_id').notNullable().references('id').inTable('orders')
    table.integer('product_id').notNullable().references('id').inTable('products'),
    table.integer('qtd').notNullable()
  })
}


export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('products_order')
}

