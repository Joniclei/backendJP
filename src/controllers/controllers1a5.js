
// importa o modulo do de servico
const ServicoExercicio1a5 = require("../services/services1a5")

//cria uma instancia de servico ,onde contem a logica
const servico = new ServicoExercicio1a5()

//declaracao da classe
class ControllerExercicio1a5 {

//metodo chamado Exe1
   Exe1(req, res) {
    // bloco try controla as excessoes e nao validando ele para para o bloco catch
    try {
      //chama o exe1 do objeto servico e passa o argumentos 
      const result = servico.exe1(req.body.numA, req.body.numB);

      res.json({ message: `Soma: ${result}` });

    } catch (error) {
      res.status(500).json(error.message)
    }
}
}

module.exports = ControllerExercicio1a5;







/*const ServicoExercicio = require("../services/")

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
*/
