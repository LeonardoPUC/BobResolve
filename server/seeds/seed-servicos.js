/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("servico").del();
  await knex("servico").insert([
    { descricao: "Montagem de móveis" },
    { descricao: "Mudanças e Carretos" },
    { descricao: "Serviços de Diarista" },
    { descricao: "Serviço de Pedreiro" },
    { descricao: "Serviço de Eletricista" }
  ]);
};
