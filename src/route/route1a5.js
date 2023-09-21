// importa o modulo express para uso
const express = require('express');

// cria uma variavel para receber o modulo do controllers
const Controller1a5 = require('../controllers/controllers1a5');

//instanciando a classe Controller1a5
const controller1a5 = new Controller1a5();


//criantando um objeto de rota
const router = express.Router();

// aqui define uma rota Post,quando o servidor receber uma solicitacao POST para esse caminho que sera executada
router.post('/api/exercici', controller1a5.Exe1);

//exporta o objeto de rota
module.exports = router;




/*
const express = require('express')
const ControllerExercicio = require('../controllers/exercicio')

const controller = new ControllerExercicio()
const router = express.Router()
router.post('/api/exercicio', controller.Somar)

module.exports = router

const express = require('express')
const ControllerExe1a5 = require('../controllers/controllers1a5');
const router1a5 = express.Router()
router1a5.post('/api/exercicio1',ControllerExe1a5.)




const ServicoExercicio1a5 = require("../Exe/exe1a5");

function route1a5(app) {
  app.post("/api/exercicio1", (req, res) => {
    try {
      const result = exe1(req.body.numA, req.body.numB);

      res.json({ message: `Soma: ${result}` });

    } catch (error) {
      res.status(500).json(error.message)
    }
  });

  //. FUP que leia o valor da hora do trabalhador e a quantidade de horas trabalhadas. Imprima o valor que o trabalhador deverá receber ao final do mês.;

  app.post("/api/exercicio2", (req, res) => {
    const result = exe2(req.body.hTrab, req.body.vHora);

    res.json({ message: `o valor da hora  ${result}` });
  });

  //3. FUP que solicite o peso de 5 pessoas e calcule a media; Imprima o resultado;

module.exports = route1a5;
*/
