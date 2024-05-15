const express = require("express");
const servicoApi = express.Router();
const jwt = require("jsonwebtoken");

const knexConfig = require("../knexfile");
const knex = require("knex")(knexConfig.development);

// processa o corpo da requisição e insere os dados recebidos
// como atributos de req.body
servicoApi.use(express.json());
servicoApi.use(express.urlencoded({ extended: true }));

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

servicoApi.get("", checkToken, (req, res) => {
  knex("servico")
    .then((dados) => {
      res.json(dados);
    })
    .catch((err) => {
      res.json({ message: `Erro ao obter os servicos: ${err.message}` });
    });
});

servicoApi.get("/:id", checkToken, (req, res) => {
  knex("servico")
    .where("id", req.params.id)
    .then((dados) => {
      res.json(dados);
    })
    .catch((err) => {
      res.json({ message: `Erro ao obter o servico: ${err.message}` });
    });
});

servicoApi.post("", checkToken, isAdmin, (req, res) => {
  knex("servico")
    .insert(req.body, "id")
    .then((dados) => {
      if (dados.length > 0) {
        res.status(201).json({
          message: "servico adicionado com sucesso.",
          data: { id: dados[0].id },
        });
      }
    })
    .catch((err) => {
      res.json({ message: `Erro ao inserir o servico: ${err.message}` });
    });
});

servicoApi.put("/:id", checkToken, isAdmin, (req, res) => {
  knex("servico")
    .where("id", req.params.id)
    .update(req.body)
    .then((dados) => {
      if (dados) {
        res.status(200).json({
          message: "servico modificado com sucesso.",
        });
      }
    })
    .catch((err) => {
      res.json({ message: `Erro ao modificar o servico: ${err.message}` });
    });
});

servicoApi.delete("/servico/:id", checkToken, isAdmin, (req, res) => {
  knex("servico")
    .where("id", req.params.id)
    .del()
    .then((dados) => {
      if (dados) {
        res.status(200).json({
          message: "servico deletado com sucesso",
        });
      }
    })
    .catch((err) => {
      res.json({ message: `Erro ao deletar o servico: ${err.message}` });
    });
});

module.exports = servicoApi;
