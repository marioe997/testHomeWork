const chai = require('chai');
const expext = chai.expect;

const functions = require('../src/functions');

console.log(functions.paresArray([4,5,6,7,8,9,10]));

describe(`Functions`, () => {

    describe('Verifica numeros pares dentro de un array', () => {
        it('Valida  si los numero en un array son par o no',() => {
            expext(functions.paresArray([4,5,6,7,8,9,10])).to.equal(['SI', 'NO', 'SI', 'NO', 'SI', 'NO', 'SI']);
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