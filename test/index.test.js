
const { describe, expect, it } = require('@jest/globals');


const {exe1} = require ('../Exe/exe1a5');


describe('Testes do primeiro exercício', () => {

 // Executado antes de TODOS os testes

 beforeAll(async () => {

 console.info('Iniciando TDD com jest!');

 });



 // Executado após TODOS os testes

 afterAll(() => {

 console.info('Encerrados os testes');

 });



 it('Should sum two numbers', () => {

 const result = exe1(1, 2)



 expect(result).toBe(3);

 })



})
