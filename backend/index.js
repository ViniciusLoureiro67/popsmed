// index.js
const express = require("express");
const app = express();
const PORT = 3000;

// Rota simples de teste
app.get("/ping", (req, res) => {
  res.send("Pong! 🏓 Backend funcionando!");
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}/ping`);
});
