const chai = require('chai');
const expext = chai.expect;

const functions = require('../src/functions');

describe(`Functions`, () => {

    describe('Verifica funcion que convierte en mayusculas ', () => {
        it('convierte la paralbra mario',() => {
            expext(functions.upper("mario")).to.equal(`MARIO`)
            .to.be.a('string');
        })

        it('convierte palabra con ultima letra con mayuscula', () => {
            expext(functions.upper("mariO")).to.equal(`MARIO`)
            .to.be.a('string');
        })

        it('convierte palabra con primera letra en mayuscula', () => {
            expext(functions.upper("Mario")).to.equal(`MARIO`)
            .to.be.a('string');
        })

        it('vconvierte palabra la cual contiene letra mayuscula en el medio', () => {
            expext(functions.upper("maRio")).to.equal(`MARIO`)
            .to.be.a('string');
        })

        it('convierte palabra la cual es toda mayusculas', () => {
            expext(functions.upper("MARIO")).to.equal(`MARIO`)
            .to.be.a('string');
        })

        it('convierte palabra que contien numeros en ella', () => {
            expext(functions.upper("mario12")).to.equal(`MARIO12`)
            .to.be.a('string');
        })

    })
})