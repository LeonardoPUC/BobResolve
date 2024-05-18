const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orcamentoSchema = new Schema({
  id_usuario_solicitante: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  id_prestador: { type: Schema.Types.ObjectId, ref: 'Prestador', required: true },
  id_servico: { type: Schema.Types.ObjectId, ref: 'Servico', required: true },
  valor: { type: Number, required: true },
  descricao: { type: String },
  observacao: { type: String }
});

module.exports = mongoose.model('Orcamento', orcamentoSchema);