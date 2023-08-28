const { exe1, exe2, exe3 } = require('./Exe/exe1a5.js');



 function route1a5(app) {

app.post("/api/exercicio1", (req, res) => {
  const result = exe1(req.body.numA, req.body.numB);

  res.json({ message: `Soma: ${result}` });
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

}

module.exports = route1a5;
