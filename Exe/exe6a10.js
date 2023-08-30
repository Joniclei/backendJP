function exe6 (seg) {
  const s = seg % 60;
  const m = Math.round(((seg - s) % 3600)/60);
  const h = Math.round(((seg - m) - (m * 60))/3600);

  return {
    hora : h,
    minutos: m,
    segundos: s
  }}

module.exports = {exe6}
