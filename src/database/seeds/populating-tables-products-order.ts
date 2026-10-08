import type { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex("products_order").del();

    await knex("products_order").insert([
        { order_id: 11, product_id: 3, qtd: 2 },
        { order_id: 12, product_id: 5, qtd: 1 },
        { order_id: 13, product_id: 1, qtd: 3 },
        { order_id: 14, product_id: 2, qtd: 1 },
        { order_id: 15, product_id: 4, qtd: 2 },
        { order_id: 16, product_id: 6, qtd: 1 },
        { order_id: 17, product_id: 7, qtd: 4 },
        { order_id: 18, product_id: 8, qtd: 2 },
        { order_id: 19, product_id: 9, qtd: 1 },
        { order_id: 20, product_id: 10, qtd: 3 },
  ]);
}