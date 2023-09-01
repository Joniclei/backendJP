const {exe6, exe7, exe8, exe9, exe10} = require ("../Exe/exe6a10");

function route6a10(app){

  app.post("/api/exercicio6", (req, res) => {
    const temp = exe6(req.body.seg);

  res.json({tempo: temp});
  })

  app.post("/api/exercicio7", (req, res) => {

    const result = exe7(req.body.km)

    res.status(200).json({resultado:result})
  })

  app.post("/api/exercicio8", (req, res)=>{
    const result = exe8(req.body.tab);

    res.status(200).json({resultado:result})

  })
  app.post("/api/exercicio9", (req, res)=> {  
    const n1 = req.body.n1;
    const n2 = req.body.n2;
    const n3 = req.body.n3;
    const result = exe9(n1, n2, n3);
    res.status(200).json (result)
  })

  app.post("/api/exercicio10", (req, res) => {
    const sexo = req.body.sexo;
    const h = req.body.h;
    const result = exe10(sexo, h);
    res.status(200).json({imc:`${result}`}); 
  })


}

module.exports = route6a10;
