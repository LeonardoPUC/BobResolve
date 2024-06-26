const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const servicoSchema = new Schema({
  imagem: { type: String, required: false },
  descricao: { type: String, required: true }
});

module.exports = mongoose.model('Servico', servicoSchema);