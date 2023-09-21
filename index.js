// importacao do express
const express = require("express");

//definicao do objeto express(nome express,aqui é o nome do obejto criado em cima da importacoa)
const app = express();

//configura o uso do JSON
app.use(express.json());

//importando o modulo de rota pelo link e passando ao indexExeA
const indexExeA = require("./src/route/route1a5");

//
app.use(indexExeA)
//indexExeA(app);

//indexExeB(app);

/*indexExeC(app);*/



app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
