const chai = require('chai');
const expext = chai.expect;

const functions = require('../src/functions');

describe(`Functions`, () => {

    describe('verifica la longitud de una palabra', () => {
        it('Palabra con 5 letras',() => {
            expext(functions.longitud("Mario")).to.equal(5)
            .to.be.a('number');
        })

        it('palabra con 11 letras', () => {
            expext(functions.longitud("Mariotheman")).to.equal(11)
            .to.be.a('number');
        })

        it('cuenta cuantas letras tiene la palabra quetorolaco', () => {
            expext(functions.longitud("quetorolaco")).to.equal(11)
            .to.be.a('number');
        })

        it('cuenta cuantas letras tienen un espacio vacio', () => {
            expext(functions.longitud("")).to.equal(0)
            .to.be.a('number');
        })

        it('palabra de dos letras', () => {
            expext(functions.longitud("si")).to.equal(2)
            .to.be.a('number');
        })

        it('palabra de una letra', () => {
            expext(functions.longitud("O")).to.equal(1)
            .to.be.a('number');
        })

    })
})