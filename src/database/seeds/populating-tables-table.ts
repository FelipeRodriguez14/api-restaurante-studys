import type { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("tables").del();

    // Inserts seed entries
    await knex("tables").insert([
        { status: "ABERTA" },
        { status: "ABERTA" },
        { status: "FECHADA" },
        { status: "ABERTA" },
        { status: "FECHADA" },
        { status: "FECHADA" },
        { status: "ABERTA" },
        { status: "ABERTA" },
        { status: "FECHADA" },
        { status: "ABERTA" },
    ]);
};
