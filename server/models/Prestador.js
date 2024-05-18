const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const prestadorSchema = new Schema({
  nome: { type: String, required: true },
  cnpj: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  telefone: { type: String },
  estado: { type: String },
  cidade: { type: String },
  bairro: { type: String },
  rua: { type: String },
  numero: { type: String },
  complemento: { type: String }
});

module.exports = mongoose.model('Prestador', prestadorSchema);