const ServicoExercicio = require("../services/")

const servico = new ServicoExercicio()

class ControllerExercicio {
    Somar(req, res){
        try {
            const result = servico.Somar(req.body.num1, req.body.num2)
            res.status(200).json({
                message: `resultado: ${result}`
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "Deu ruim" })
        }
    }
}

module.exports = ControllerExercicio




const ServicoExercicio1A5 = require("../services/services1a5");

const 


function route1a5(app) {
  app.post("/api/exercicio1", (req, res) => {
    try {   
      const result = exe1(req.body.numA, req.body.numB);
  
      res.json({ message: `Soma: ${result}` });

    } catch (error) {
      res.status(500).json(error.message)
    }
  })
}
