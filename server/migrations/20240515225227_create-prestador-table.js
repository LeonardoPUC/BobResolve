/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("prestador", (tbl) => {
    tbl.increments("id").primary();
    tbl.text("nome", 200).notNullable();
    tbl.text("cnpj", 20).notNullable();
    tbl.text("email", 200).unique().notNullable();
    tbl.text("telefone", 100).nullable();
    tbl.text("estado", 100).nullable();
    tbl.text("cidade", 100).nullable();
    tbl.text("bairro", 200).nullable();
    tbl.text("rua", 200).nullable();
    tbl.text("numero", 100).nullable();
    tbl.text("complemento", 100).nullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("prestador");
};
