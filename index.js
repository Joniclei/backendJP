import express from "express";

const app = express();

import { somar, receber,  mediaPeso} from './Exe/exe1a5.js';
//import { receber } from './Exe/exe1a5.js';


app.use(express.json());

//. FUP que solicite dois numeros reais, realize a soma; Imprima o resultado;

app.post("/api/exercicio1", (req,res) => {

  const result = somar(req.body.numA, req.body.numB)


  res.json({message: `Soma: ${result}`});


})


//. FUP que leia o valor da hora do trabalhador e a quantidade de horas trabalhadas. Imprima o valor que o trabalhador deverá receber ao final do mês.;


app.post("/api/exercicio2", (req,res) => {

  const result = receber(req.body.hTrab, req.body.vHora)

  res.json({message: `o valor da hora  ${result}`});
})


//3. FUP que solicite o peso de 5 pessoas e calcule a media; Imprima o resultado;

app.post("/api/exercicio3", (req,res)=> {
  const result = mediaPeso(req.body.p1, req.body.p2, req.body.p3, req.body.p4, req.body.p5)

  res.json({message:`a media de peso ${result}`});
})


app.get("/api/exercicio3", (req,res) =>{
  const p1 = parseFloat(req.query.p1);
  const p2 = parseFloat(req.query.p2);
  const p3 = parseFloat(req.query.p3);
  const p4 = parseFloat(req.query.p4);
  const p5 = parseFloat(req.query.p5);
  const media = (p1+p2+p3+p4+p5)/5;
  res.json({message:`media ${media}`});
})



//4. Ler uma temperatura em graus Celsius e apresentá-la convertida em graus Fahrenheit. A fórmula de conversão é : F = (9*C+160)/5 Sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.

app.get("/api/exercicio4", (req,res) =>{
  const cels = parseFloat(req.query.cels);
  const far = ((9*10)+160)/5;
  res.json({message:`fahrenheit = ${far}`});
})




//5. FUP que solicite a quantidade de milhas e converta para quilometros (1milha = 1.60934kms);

app.get("/api/exercicio5",(req,res) =>{
  const mi = parseFloat(req.query.mi);
  const resu = (mi * 1.60934);
  res.json({message:` Quilometros : ${resu}`});
})


app.listen (3000, ()=> {
  console.log ("Servidor rodando na porta 3000")
});
