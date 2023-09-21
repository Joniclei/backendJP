/*class ServicoExercicio {
    Somar(num1, num2) {
        console.log('ENTROU NA FUNCAO')
        if(isNaN(num1) || isNaN(num2)){
            throw new Error("Favor informar números sadsa dasd")
        }
        const resultado = num1 + num2

        return resultado;
    }
}

module.exports = ServicoExercicio
*/

class ServicoExercicio1a5 {
    exe1(numA, numB) {

        if (isNaN(numA) || isNaN(numB)) {
            throw new Error("asd")
        };

        return numA + numB;

    }
   /* exe2(hTrab, vHora) {
        return hTrab * vHora;
    }

    exe3(p1, p2, p3, p4, p5) {

        return (p1 + p2 + p3 + p4 + p5) / 5;
    }

    exe4(cel) {
        const f = (9 * cel + 160) / 5
        return f;
    }

    exe5(milhas) {

        return { km: 1.60934 * milhas }
    }
    */

}

module.exports = ServicoExercicio1a5;
