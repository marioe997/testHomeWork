const dias = [
    'lunes',
    'martes',
    'miércoles',
    'jueves',
    'viernes',
    'sábado',
    'domingo',
  ];

let date = new Date(); 

/////////////////

const pares = (element) => element % 2 === 0 ? `SI` : `NO`;

const longitud = (palabra) => palabra.length;

const diaSemana = (dia) => dia > 0 && dia < 7 ? dias[dia - 1] : `Error el numero no es correcto`;

const time = () => date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

const compara = (a, b) => a - b;

const sortArray = (array) => array.sort(function(a, b) {return a - b;});

const upper = (string) => string.toUpperCase();

const paresArray = (array) => {
    let arrayResp = [];
    for (let i = 0; i < array.length; i++) {
        arrayResp.push(pares(array[i]));
    }
    return arrayResp;
}; 

module.exports = {
    pares, 
    paresArray,
    longitud,
    diaSemana,
    time,
    sortArray,
    upper,
}
