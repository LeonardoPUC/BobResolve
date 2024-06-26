const express = require("express");
const usuarioApi = express.Router();
const dbUsuario = require("../models/Usuario");
const { checkToken, isAdmin } = require("./auth");

/**
 * @swagger
 * tags:
 *   name: Usuário
 *   description: Endpoints relacionados a usuários
 */

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
 *         name: token
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
 *       401:
 *         description: Token inválido
 *     security:
 *       - BearerAuth: []
 */
usuarioApi.get("", checkToken, (req, res) => {
  dbUsuario
    .find()
    .then((dados) => {
      res.json(dados);
    })
    .catch((err) => {
      res.json({ message: `Erro ao obter os usuarios: ${err.message}` });
    });
});

/**
 * @swagger
 * /api/usuario/{id}:
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
 *         name: token
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
  dbUsuario
    .findById(req.params.id)
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
 *         name: token
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
  const novoUsuario = new dbUsuario(req.body);
  novoUsuario
    .save()
    .then((dados) => {
      res.status(201).json({
        message: "Usuario adicionado com sucesso.",
        data: dados,
      });
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
 *         name: token
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
  dbUsuario
    .findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((dados) => {
      res.status(200).json({
        message: "Usuario modificado com sucesso.",
        data: dados,
      });
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
 *         name: token
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
usuarioApi.delete("/:id", checkToken, isAdmin, (req, res) => {
  dbUsuario
    .findByIdAndDelete(req.params.id)
    .then((dados) => {
      res.status(200).json({
        message: "Usuario deletado com sucesso",
        data: dados,
      });
    })
    .catch((err) => {
      res.json({ message: `Erro ao deletar o usuario: ${err.message}` });
    });
});

module.exports = usuarioApi;
