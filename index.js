//const express = require('express')

const express = require("express");

//const router = require('./src/routes/exercicio.js')

const indexExeA = require("./src/route/route1a5");

const indexExeB = require("./src/route/route6a10");

//const indexExeC = require("./src/route/route11a15")



//const app = express()
const app = express();

//app.use(express.json())

app.use(express.json());


indexExeA(app);

indexExeB(app);

/*indexExeC(app);*/



app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});


