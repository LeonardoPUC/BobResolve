/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('usuario').del()
  await knex('usuario').insert([
    { nome: 'Administrator', email: 'admin@pucminas.com.br', senha: '$2a$08$tprzZIs1OTKVMaVzZWrKfe8rX3toatWD6lsvp4u9AR54mrbSSLX7e', roles: 'ADMIN;USER' },
    { nome: 'Leonardo Neves', email: 'leo@pucminas.com.br', senha: '$2a$08$tprzZIs1OTKVMaVzZWrKfe8rX3toatWD6lsvp4u9AR54mrbSSLX7e', roles: 'USER' }
  ]);
};
