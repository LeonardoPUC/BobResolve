const express = require("express");
const autenticacaoApi = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const knexConfig = require("../knexfile");
const knex = require("knex")(knexConfig.development);

/**
 * @swagger
 * tags:
 *   name: Autenticação
 *   description: Endpoints relacionados a autenticação
 */

// processa o corpo da requisição e insere os dados recebidos
// como atributos de req.body
autenticacaoApi.use(express.json());
autenticacaoApi.use(express.urlencoded({ extended: true }));

/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: Login
 *     description: Login
 *     tags: 
 *       - Autenticação
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               senha:
 *                 type: string
 *     responses:
 *       200:
 *         description: Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
autenticacaoApi.post("/login", (req, res) => {
  const { email, senha } = req.body;
  knex("usuario")
    .where({ email: email })
    .then((dados) => {
      if (dados.length > 0) {
        let checkSenha = bcrypt.compareSync(senha, dados[0].senha);
        if (checkSenha) {
          jwt.sign(
            { id: dados[0].id, roles: dados[0].roles },
            process.env.SECRET_KEY,
            { algorithm: "HS256" },
            (err, token) => {
              if (err)
                res
                  .status(500)
                  .json({ message: `Erro ao criar token: ${err.message}` });
              else
                res
                  .status(200)
                  .json({
                    message: "Autenticação realizada com sucesso",
                    token: token,
                  });
            }
          );
        } else {
          res.status(401).json({ message: "Usuário ou senha inválidos." });
        }
      } else {
        res.status(401).json({ message: "Usuário ou senha inválidos." });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: `Erro ao obter o usuário: ${err.message}` });
    });
});

/**
 * @swagger
 * /api/register:
 *   post:
 *     summary: Register
 *     description: Register
 *     tags: 
 *       - Autenticação
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               senha:
 *                 type: string
 *     responses:
 *       200:
 *         description: Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
autenticacaoApi.post("/register", (req, res) => {
  knex("usuario")
    .insert(
      {
        nome: req.body.nome,
        email: req.body.email,
        senha: bcrypt.hashSync(req.body.senha, 8),
      },
      ["id"]
    )
    .then((result) => {
      let usuario = result[0];
      res
        .status(200)
        .json({ id: usuario.id, message: "Cadastro realizado com sucesso." });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Erro ao registrar usuario - " + err.message,
      });
    });
});

module.exports = autenticacaoApi;
