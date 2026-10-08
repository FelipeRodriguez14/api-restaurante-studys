import type { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("orders").del();

    await knex("orders").insert([
        { table_id: 1, total: 45.50 },
        { table_id: 2, total: 89.90 },
        { table_id: 3, total: 32.00 },
        { table_id: 4, total: 120.00 },
        { table_id: 5, total: 55.40 },
        { table_id: 6, total: 78.20 },
        { table_id: 7, total: 95.00 },
        { table_id: 8, total: 42.10 },
        { table_id: 9, total: 64.30 },
        { table_id: 10, total: 110.00 },
    ]);
};
