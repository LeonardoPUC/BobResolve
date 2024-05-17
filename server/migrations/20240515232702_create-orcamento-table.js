/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("orcamento", tbl => {
        tbl.increments('id').primary();
        tbl.integer("id_usuario_solicitante").unsigned().notNullable().references('id').inTable('usuario');
        tbl.integer("id_prestador").unsigned().notNullable().references('id').inTable('prestador');
        tbl.integer("id_servico").unsigned().notNullable().references('id').inTable('servico');
        tbl.integer("valor").notNullable();
        tbl.text("descricao", 500).nullable();
        tbl.text("observacao", 500).nullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists("orcamento");
};
