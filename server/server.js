require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

const swaggerSetup = require("./swagger");
const autenticacaoApi = require("./routes/autenticacaoapi");
const usuarioApi = require("./routes/usuarioapi");

app.use("/api/", autenticacaoApi);
app.use("/api/usuario", usuarioApi);

// Configuração do Swagger
swaggerSetup(app);

app.use((req, res) => {
  res.status(404);
  res.send("Recurso solicitado não existe");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
