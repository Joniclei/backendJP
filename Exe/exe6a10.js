function exe6(seg) {
  const s = seg % 60;
  const m = Math.round(((seg - s) % 3600) / 60);
  const h = Math.round((seg - m - m * 60) / 3600);

  return {
    hora: h,
    minutos: m,
    segundos: s,
  };
}

function exe7(km) {
  const m = km * 1000;
  const cm = km * 100000;
  return {
    metros: m,
    centimetros: cm,
  };
}

function exe8(tab) {
  let valor = [];
  let resultado = 0 ;
  let mul = []
  for (i = 0; i < 10; i++) {
    const j = i + 1;
    valor[i] = j;
    resultado  = tab * j;
    mul [i] = `${tab} X ${j} = ${resultado}`;
  }
  return {
    mul
  }
}

function exe9(n1,n2,n3){
  const media = (n1+n2+n3)/3;
  const mensagem = ""
  if (media >= 7){
    mensagem = "Aprovado";
  }else if ()

}




module.exports = { exe6, exe7, exe8 };
