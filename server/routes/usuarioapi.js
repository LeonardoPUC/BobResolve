const express = require("express");
const usuarioApi = express.Router();
const jwt = require("jsonwebtoken");

const knexConfig = require("../knexfile");
const knex = require("knex")(knexConfig.development);

// processa o corpo da requisição e insere os dados recebidos
// como atributos de req.body
usuarioApi.use(express.json());
usuarioApi.use(express.urlencoded({ extended: true }));

const checkToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      res.status(401).json({ message: "Token inválido" });
    } else {
      req.id = decoded.id;
      req.roles = decoded.roles;
      next();
    }
  });
};

const isAdmin = (req, res, next) => {
  if (req.roles.indexOf("ADMIN") >= 0) {
    next();
  } else {
    res.status(403).json({ message: "Acesso negado" });
  }
};

usuarioApi.get("", checkToken, (req, res) => {
  knex("usuario")
    .then((dados) => {
      res.json(dados);
    })
    .catch((err) => {
      res.json({ message: `Erro ao obter os usuarios: ${err.message}` });
    });
});

usuarioApi.get("/:id", checkToken, (req, res) => {
  knex("usuario")
    .where("id", req.params.id)
    .then((dados) => {
      res.json(dados);
    })
    .catch((err) => {
      res.json({ message: `Erro ao obter o usuario: ${err.message}` });
    });
});

usuarioApi.post("", checkToken, isAdmin, (req, res) => {
  knex("usuario")
    .insert(req.body, "id")
    .then((dados) => {
      if (dados.length > 0) {
        res.status(201).json({
          message: "Usuario adicionado com sucesso.",
          data: { id: dados[0].id },
        });
      }
    })
    .catch((err) => {
      res.json({ message: `Erro ao inserir o usuario: ${err.message}` });
    });
});

usuarioApi.put("/:id", checkToken, isAdmin, (req, res) => {
  knex("usuario")
    .where("id", req.params.id)
    .update(req.body)
    .then((dados) => {
      if (dados) {
        res.status(200).json({
          message: "Usuario modificado com sucesso.",
        });
      }
    })
    .catch((err) => {
      res.json({ message: `Erro ao modificar o usuario: ${err.message}` });
    });
});

usuarioApi.delete("/usuario/:id", checkToken, isAdmin, (req, res) => {
  knex("usuario")
    .where("id", req.params.id)
    .del()
    .then((dados) => {
      if (dados) {
        res.status(200).json({
          message: "Usuario deletado com sucesso",
        });
      }
    })
    .catch((err) => {
      res.json({ message: `Erro ao deletar o usuario: ${err.message}` });
    });
});

module.exports = usuarioApi;
