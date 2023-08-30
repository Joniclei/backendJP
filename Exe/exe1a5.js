function exe1(numaA, numB) {
  return numaA + numB;
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

function exe5 (seg){
  const s = seg % 60;
  const m = (((seg - s) % 3600)/60);
  const h = ((seg - m) - (m * 60))/3600;


  return {
    hora : h,
    minutos: m,
    segundos: s
  }
}


module.exports = {exe1, exe2, exe3, exe4, exe5};
