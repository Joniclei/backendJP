const express = require("express");

const indexExe = require("./route1a5.js");

const app = express();
app.use(express.json());

indexExe(app);



app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
