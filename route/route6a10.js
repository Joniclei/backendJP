const {exe6, exe7} = require ("../Exe/exe6a10");

function route6a10(app){

  app.post("/api/exercicio6", (req, res) => {
    const temp = exe6(req.body.seg);

  res.json({tempo: temp});
  })

  app.post("/api/exercicio7", (req, res) => {

    const result = exe7(req.body.km)

    res.status(200).json({resultado:result})
  })



}

module.exports = route6a10;
