const chai = require('chai');
const expext = chai.expect;

const functions = require('../src/functions');

let date = new Date(); 

describe(`Functions`, () => {

    describe('prueba la funcion que genera la hora', () => {
        it('funcion que genera hora',() => {
            expext(functions.time()).to.equal(date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds());
        })

    })
})