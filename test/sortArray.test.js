const chai = require('chai');
const expext = chai.expect;

const functions = require('../src/functions');


describe(`Functions`, () => {

    describe('Ordena un array', () => {
        it('ordena un array con numeros normales',() => {
            expext(functions.sortArray([6,1,8,10,4,1,20])).to.eql([ 1, 1, 4, 6, 8, 10, 20 ]).but.not.equal([ 1, 1, 4, 6, 8, 10, 20 ]);
        })

        it('ordena un array con numeros negativos', () => {
            expext(functions.sortArray([6,-5,-9,1000])).to.eql([ -9, -5, 6, 1000 ]).but.not.equal([ -9, -5, 6, 1000 ]);
        })

        it('ordena un array con operaciones en el', () => {
            expext(functions.sortArray([6,1,(8*1),33.5,-5])).to.eql([ -5, 1, 6, 8, 33.5 ]).but.not.equal([ -5, 1, 6, 8, 33.5 ]);
        })

        it('orena un array con decimales y numeros normales', () => {
            expext(functions.sortArray([6,0.50,20])).to.eql([0.50,6,20]).but.not.equal([0.50,6,20]);
        })

        it('ordena un array de numeros con punto decimal', () => {
            expext(functions.sortArray([33.4,88.90,56.7,100])).to.eql([ 33.4, 56.7, 88.9, 100 ]).but.not.equal([ 33.4, 56.7, 88.9, 100 ]);    
        })

        it('ordena un array con puros numeros negativos', () => {
            expext(functions.sortArray([-9,-8,-7,-6,-5,-4,-3,-2,-1])).to.eql([ -9, -8, -7, -6, -5, -4, -3, -2, -1 ]).but.not.equal([ -9, -8, -7, -6, -5, -4, -3, -2, -1 ]);
        })

    })
})