const express = require("express");
const usuarioApi = express.Router();
const jwt = require("jsonwebtoken");

const knexConfig = require("../knexfile");
const knex = require("knex")(knexConfig.development);

/**
 * @swagger
 * tags:
 *   name: Usuário
 *   description: Endpoints relacionados a usuários
 */

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

/**
 * @swagger
 * /api/usuario:
 *   get:
 *     summary: Lista todos os usuários
 *     description: Lista todos os usuários
 *     tags: 
 *       - Usuário
 *     parameters:
 *       - in: header
 *         name: authorization
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
usuarioApi.get("", (req, res) => {
  knex("usuario")
    .then((dados) => {
      res.json(dados);
    })
    .catch((err) => {
      res.json({ message: `Erro ao obter os usuarios: ${err.message}` });
    });
});

/**
 * @swagger
 * /api/usuario:
 *   get:
 *     summary: Lista um usuário
 *     description: Lista um usuário
 *     tags: 
 *       - Usuário
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *       - in: header
 *         name: authorization
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
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

/**
 * @swagger
 * /api/usuario:
 *   post:
 *     summary: Insere um usuário
 *     description: Insere um usuário
 *     tags: 
 *       - Usuário
 *     parameters:
 *       - in: header
 *         name: authorization
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               email:
 *                 type: string
 *               senha:
 *                 type: string
 *               roles:
 *                 type: string
 *     responses:
 *       200:
 *         description: Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
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

/**
 * @swagger
 * /api/usuario:
 *   put:
 *     summary: Edita um usuário
 *     description: Edita um usuário
 *     tags: 
 *       - Usuário
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *       - in: header
 *         name: authorization
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               email:
 *                 type: string
 *               senha:
 *                 type: string
 *               roles:
 *                 type: string
 *     responses:
 *       200:
 *         description: Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
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

/**
 * @swagger
 * /api/usuario:
 *   delete:
 *     summary: Deleta um usuário
 *     description: Deleta um usuário
 *     tags: 
 *       - Usuário
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *       - in: header
 *         name: authorization
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
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
