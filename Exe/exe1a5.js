function exe1(numaA, numB) {


  if(isNaN(numaA) || isNaN(numB)){
    throw new Error("asd")
  };

  return  numaA + numB;
}

function exe2(hTrab, vHora) {
  return hTrab * vHora;
}

function exe3(p1, p2, p3, p4, p5) {

  return (p1 + p2 + p3 + p4 + p5) / 5;
}

function exe4 (cel){
  const f = (9*cel+160)/5
  return f;
}

function exe5 (milhas){

  return { km : 1.60934 * milhas}
}


module.exports = {exe1, exe2, exe3, exe4, exe5};
