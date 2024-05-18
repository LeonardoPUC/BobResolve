const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  senha: { type: String, required: true },
  cpf: { type: String },
  telefone: { type: String },
  estado: { type: String },
  cidade: { type: String },
  bairro: { type: String },
  rua: { type: String },
  numero: { type: String },
  complemento: { type: String },
  roles: { type: [String], default: ['USER'], required: true }
});

module.exports = mongoose.model('Usuario', usuarioSchema);