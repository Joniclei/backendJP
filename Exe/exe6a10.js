function exe6 (seg) {
  const s = seg % 60;
  const m = Math.round(((seg - s) % 3600)/60);
  const h = Math.round(((seg - m) - (m * 60))/3600);

  return {
    hora : h,
    minutos: m,
    segundos: s
  }}
function exe7 (km){
  const m = km * 1000;
  const cm = km * 100000
  return {
    metros : m,
    centimetros: cm
  }
}
module.exports = {exe6, exe7}
