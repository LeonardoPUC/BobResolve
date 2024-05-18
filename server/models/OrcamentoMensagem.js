const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orcamentoMensagemSchema = new Schema({
  id_orcamento: { type: Schema.Types.ObjectId, ref: 'Orcamento', required: true },
  id_usuario: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  texto: { type: String, required: true }
});

module.exports = mongoose.model('OrcamentoMensagem', orcamentoMensagemSchema);