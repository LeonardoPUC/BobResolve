/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("prestador_servico", tbl => {
        tbl.increments('id').primary();
        tbl.integer("id_prestador").unsigned().notNullable().references('id').inTable('prestador');
        tbl.integer("id_servico").unsigned().notNullable().references('id').inTable('servico');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists("prestador_servico");
};
