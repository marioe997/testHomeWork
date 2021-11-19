const chai = require('chai');
const expext = chai.expect;

const functions = require('../src/functions');


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

        it('valida que una operacion es numero par o inpar', () => {
            expext(functions.pares((543798*35)/19)).to.equal(`NO`)
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
            expext(functions.pares(0)).to.equal(`SI`)
            .to.be.a('string');
        })

    })
})