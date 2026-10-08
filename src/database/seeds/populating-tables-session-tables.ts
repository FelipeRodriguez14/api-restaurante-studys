import type { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex("session_tables").del();

    await knex("session_tables").insert([
        { order_id: 11, table_id: 1, tm_open: "11:30:00", tm_close: "12:45:00", tm_stay: "01:15:00" },
        { order_id: 12, table_id: 2, tm_open: "11:45:00", tm_close: "13:00:00", tm_stay: "01:15:00" },
        { order_id: 13, table_id: 3, tm_open: "12:00:00", tm_close: "12:50:00", tm_stay: "00:50:00" },
        { order_id: 14, table_id: 4, tm_open: "12:15:00", tm_close: "14:00:00", tm_stay: "01:45:00" },
        { order_id: 15, table_id: 5, tm_open: "12:30:00", tm_close: "13:30:00", tm_stay: "01:00:00" },
        { order_id: 16, table_id: 6, tm_open: "12:40:00", tm_close: "13:50:00", tm_stay: "01:10:00" },
        { order_id: 17, table_id: 7, tm_open: "13:00:00", tm_close: "14:20:00", tm_stay: "01:20:00" },
        { order_id: 18, table_id: 8, tm_open: "13:10:00", tm_close: "14:30:00", tm_stay: "01:20:00" },
        { order_id: 19, table_id: 9, tm_open: "13:20:00", tm_close: "14:40:00", tm_stay: "01:20:00" },
        { order_id: 20, table_id: 10, tm_open: "13:30:00", tm_close: "15:00:00", tm_stay: "01:30:00" },
    ]);
}