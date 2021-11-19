const chai = require('chai');
const expext = chai.expect;

const functions = require('../src/functions');


describe(`Functions`, () => {

    describe('veriifca dia de la semana dependiendo el numero ingresado', () => {
        it('lunes',() => {
            expext(functions.diaSemana(1)).to.equal(`lunes`)
            .to.be.a('string');
        })

        it('martes', () => {
            expext(functions.diaSemana(2)).to.equal(`martes`)
            .to.be.a('string');
        })

        it('miercoles', () => {
            expext(functions.diaSemana(3)).to.equal(`miércoles`)
            .to.be.a('string');
        })

        it('jueves', () => {
            expext(functions.diaSemana(4)).to.equal(`jueves`)
            .to.be.a('string');
        })

        it('viernes', () => {
            expext(functions.diaSemana(5)).to.equal(`viernes`)
            .to.be.a('string');
        })

        it('sabado', () => {
            expext(functions.diaSemana(6)).to.equal(`sábado`)
            .to.be.a('string');
        })

        it('Error dia no encontrado', () => {
            expext(functions.diaSemana(16)).to.equal(`Error el numero no es correcto`)
            .to.be.a('string');
        })

    })
})