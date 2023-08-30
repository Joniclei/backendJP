const express = require("express");

const indexExeA = require("./route/route1a5");

const indexExeB = require("./route/route6a10");


const app = express();
app.use(express.json());


indexExeA(app);

indexExeB(app);



app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
