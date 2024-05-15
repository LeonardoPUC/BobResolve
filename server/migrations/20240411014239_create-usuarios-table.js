/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("usuario", tbl => {
        tbl.increments('id').primary();
        tbl.text ("nome", 200).notNullable();
        tbl.text ("email", 200).unique().notNullable();
        tbl.text ("senha", 100).notNullable();
        tbl.text ("cpf", 100).nullable();
        tbl.text ("telefone", 100).nullable();
        tbl.text ("estado", 100).nullable();
        tbl.text ("cidade", 100).nullable();
        tbl.text ("bairro", 200).nullable();
        tbl.text ("rua", 200).nullable();
        tbl.text ("numero", 100).nullable();
        tbl.text ("complemento", 100).nullable();
        tbl.text ("roles", 200).defaultTo('USER').notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists("usuario");
};
