const chai = require('chai');
const expext = chai.expect;

const functions = require('../src/functions');

console.log(functions.paresArray([4,5,6,7,8,9,10]));

console.log(functions.longitud("Mario"));

console.log(functions.diaSemana(10));

console.log(functions.time());

console.log(functions.sortArray([6,1,8,10,4,1,20,500,200,6,7,9,1,2,3,4]));

console.log(functions.upper("mario"));

describe(`Functions`, () => {

    describe('Verifica numeros pares', () => {
        it('Valida 5 es numero no par',() => {
            expext(functions.pares(5)).to.equal(`NO`)
            .to.be.a('string');
        })

        it('valida que 6 es numero par', () => {
            expext(functions.pares(6)).to.equal(`SI`)
            .to.be.a('string');
        })

        it('valida que 543798 es numero par', () => {
            expext(functions.pares(543798)).to.equal(`SI`)
            .to.be.a('string');
        })

        it('valida que -10 es numero par', () => {
            expext(functions.pares(-10)).to.equal(`SI`)
            .to.be.a('string');
        })

        it('valida que 10.50 es numero no par', () => {
            expext(functions.pares(10.50)).to.equal(`NO`)
            .to.be.a('string');
        })

        it('valida que 0 es numero no par', () => {
            expext(functions.pares()).to.equal(`NO`)
            .to.be.a('string');
        })

    })
})