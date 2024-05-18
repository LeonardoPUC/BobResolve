const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const servicoSchema = new Schema({
  descricao: { type: String, required: true }
});

module.exports = mongoose.model('Servico', servicoSchema);