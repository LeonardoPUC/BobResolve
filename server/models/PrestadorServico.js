const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const prestadorServicoSchema = new Schema({
  id_prestador: { type: Schema.Types.ObjectId, ref: 'Prestador', required: true },
  id_servico: { type: Schema.Types.ObjectId, ref: 'Servico', required: true }
});

module.exports = mongoose.model('PrestadorServico', prestadorServicoSchema);