const chai = require('chai');
const expext = chai.expect;

const functions = require('../src/functions');

describe(`Functions`, () => {

    describe('Verifica numeros pares dentro de un array', () => {
        it('valida numeros pares e impares',() => {
            expext(functions.paresArray([4,5,6,7,8,9,10])).to.eql(['SI', 'NO', 'SI', 'NO', 'SI', 'NO', 'SI']);
        })

        it('valida pares e impares con diferentes tipos de numeros', () => {
            expext(functions.paresArray([4,5.30,-6])).to.eql([ 'SI', 'NO', 'SI' ]);
        })

        it('valida pares e impares con operaciones como input', () => {
            expext(functions.paresArray([(4/2),(5.30*5),(-6+20)])).to.eql(['SI', 'NO', 'SI']);
        })

        it('valida pares en numeros negativos', () => {
            expext(functions.paresArray([-4,-5,-30,-6])).to.eql(['SI', 'NO', 'SI', 'SI']);
        })

        it('valida pares en numeros con decimal', () => {
            expext(functions.paresArray([10.50,20.60,30.1,11.00])).to.eql(['NO', 'NO', 'NO', 'NO']);
        })

        it('valida pares en array de numero 0', () => {
            expext(functions.paresArray([0,0,0,0,0])).to.eql(['SI', 'SI', 'SI', 'SI', 'SI']);
        })

    })
})