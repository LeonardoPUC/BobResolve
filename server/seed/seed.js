require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const dbUsuario = require("../models/Usuario");
const dbServico = require("../models/Servico");
const Prestador = require("../models/Prestador");
const PrestadorServico = require("../models/PrestadorServico");
const Orcamento = require("../models/Orcamento");
const OrcamentoMensagem = require("../models/OrcamentoMensagem");

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");

    // Inserir dados de exemplo aqui
    const users = [
      {
        nome: "Admin",
        email: "admin@example.com",
        senha: bcrypt.hashSync("123456", 8),
        roles: ["ADMIN"],
      },
      {
        nome: "User",
        email: "user@example.com",
        senha: bcrypt.hashSync("123456", 8),
        roles: ["USER"],
      },
    ];

    const servicos = [
      { descricao: "Serviço de pintura" },
      { descricao: "Serviço de Pedreiro" },
      { descricao: "Serviço de Diarista" },
      { descricao: "Serviço de Eletricista" },
    ];

    await dbUsuario.insertMany(users);
    console.log("Usuários inseridos");

    await dbServico.insertMany(servicos);
    console.log("Serviços inseridos");

    // Fechar a conexão após inserções
    mongoose.connection.close();
    console.log("Conexão com o MongoDB fechada");
  } catch (err) {
    console.error("Erro ao inserir dados:", err);
    mongoose.connection.close();
  }
};

seedDatabase();
