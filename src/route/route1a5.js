
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




const { exe1, exe2, exe3, exe4, exe5 } = require("../Exe/exe1a5");

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

  app.post("/api/exercicio3", (req, res) => {
    const result = exe3(
      req.body.p1,
      req.body.p2,
      req.body.p3,
      req.body.p4,
      req.body.p5
    );

    res.json({ message: `a media de peso ${result}` });
  });

  app.post("/api/exercicio4", (req, res) => {
    const x = exe4(req.body.cel);

    res.json({ tranformation: ` ${x}` });
  });

  app.post("/api/exercicio5", (req, res) => {
    const km = exe5(req.body.milhas);

    res.json(km);
  });
}

module.exports = route1a5;
