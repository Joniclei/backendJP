
const { describe, expect, it } = require('@jest/globals');

const ServicoExercicio = require("../src/services/services1a5")
//const {exe1} = require ('../Exe/exe1a5');


describe('Testes do primeiro exercício', () => {

  // Executado antes de TODOS os testes

  const servico = new ServicoExercicio();

  // nao fizemos o before e nem o after
 /* beforeAll(async () => {

    console.info('Iniciando TDD com jest!');

  });



  // Executado após TODOS os testes

  afterAll(() => {

    console.info('Encerrados os testes');

  });
*/


  it('Should sum two numbers', () => {

    const result = servico.exe1(1, 2)



    expect(result).toBe(3);

  })
  it ('',() => {

    const result = servico.exe1('x',2)

    expect(result).toBe('asd');

  })







})
