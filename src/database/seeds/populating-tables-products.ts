import type { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex("products").del();

    await knex("products").insert([
        { description: "Hambúrguer Clássico", value: 25.00 },
        { description: "Batata Frita Média", value: 15.00 },
        { description: "Refrigerante Lata", value: 6.00 },
        { description: "Pizza Margherita", value: 45.00 },
        { description: "Suco Natural de Laranja", value: 8.00 },
        { description: "X-Burger Bacon", value: 32.00 },
        { description: "Porção de Onion Rings", value: 18.00 },
        { description: "Água Mineral", value: 4.00 },
        { description: "Milkshake de Chocolate", value: 16.00 },
        { description: "Pudim de Leite", value: 10.00 },
    ]);
}