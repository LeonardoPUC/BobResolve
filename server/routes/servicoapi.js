const express = require("express");
const servicoApi = express.Router();
const dbServico = require("../models/Servico");
const { checkToken, isAdmin } = require("./auth");

/**
 * @swagger
 * tags:
 *   name: Serviço
 *   description: Endpoints relacionados a serviços
 */

/**
 * @swagger
 * /api/servico:
 *   get:
 *     summary: Lista todos os serviços
 *     description: Lista todos os serviços
 *     tags: 
 *       - Serviço
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
 */
servicoApi.get("", (req, res) => {
  dbServico.find()
    .then(dados => {
      res.json(dados);
    })
    .catch(err => {
      res.json({ message: `Erro ao obter os servicos: ${err.message}` });
    });
});

/**
 * @swagger
 * /api/servico/{id}:
 *   get:
 *     summary: Lista um serviço
 *     description: Lista um serviço
 *     tags: 
 *       - Serviço
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
servicoApi.get("/:id", checkToken, (req, res) => {
  dbServico.findById(req.params.id)
    .then(dados => {
      res.json(dados);
    })
    .catch(err => {
      res.json({ message: `Erro ao obter o servico: ${err.message}` });
    });
});

/**
 * @swagger
 * /api/servico:
 *   post:
 *     summary: Insere um serviço
 *     description: Insere um serviço
 *     tags: 
 *       - Serviço
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
 *               descricao:
 *                 type: string
 *     responses:
 *       200:
 *         description: Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
servicoApi.post("", checkToken, isAdmin, (req, res) => {
  const novoServico = new dbServico(req.body);
  novoServico.save()
    .then(dados => {
      res.status(201).json({
        message: "dbServico adicionado com sucesso.",
        data: dados
      });
    })
    .catch(err => {
      res.json({ message: `Erro ao inserir o servico: ${err.message}` });
    });
});

/**
 * @swagger
 * /api/servico:
 *   put:
 *     summary: Edita um serviço
 *     description: Edita um serviço
 *     tags: 
 *       - Serviço
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
 *               descricao:
 *                 type: string
 *     responses:
 *       200:
 *         description: Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
servicoApi.put("/:id", checkToken, isAdmin, (req, res) => {
  dbServico.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(dados => {
      res.status(200).json({
        message: "dbServico modificado com sucesso.",
        data: dados
      });
    })
    .catch(err => {
      res.json({ message: `Erro ao modificar o servico: ${err.message}` });
    });
});

/**
 * @swagger
 * /api/servico:
 *   delete:
 *     summary: Deleta um serviço
 *     description: Deleta um serviço
 *     tags: 
 *       - Serviço
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
servicoApi.delete("/:id", checkToken, isAdmin, (req, res) => {
  dbServico.findByIdAndDelete(req.params.id)
    .then(dados => {
      res.status(200).json({
        message: "dbServico deletado com sucesso",
        data: dados
      });
    })
    .catch(err => {
      res.json({ message: `Erro ao deletar o servico: ${err.message}` });
    });
});

module.exports = servicoApi;
