/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("orcamento_mensagem", tbl => {
        tbl.increments('id').primary();
        tbl.integer("id_orcamento").unsigned().notNullable().references('id').inTable('orcamento');
        tbl.integer("id_usuario").unsigned().notNullable().references('id').inTable('usuario');
        tbl.text("texto", 500).notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists("orcamento_mensagem");
};
