const express = require("express");

const indexExeA = require("./route/route1a5");

const indexExeB = require("./route/route6a10");

const indexExeC = require("./route/route11a15")


const app = express();
app.use(express.json());


indexExeA(app);

indexExeB(app);

/*indexExeC(app);*/



app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});


/*

const express = require('express')
const router = require('./src/routes/exercicio.js')

const app = express()
const port = 3000

app.use(express.json())
app.use(router)

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})


*/