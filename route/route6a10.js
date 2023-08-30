const {exe6,} = require ("../Exe/exe6a10");

function route6a10(app){

  app.post("/api/exercicio6", (req, res) => {
    const temp = exe6(req.body.seg);

  res.json({tempo: temp});
  })

  
}

module.exports = route6a10;
