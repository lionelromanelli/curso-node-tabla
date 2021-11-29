const { crearArchivo } = require('./helpers/multiplicar');
const colors = require('colors');


console.clear();


crearArchivo(3)
.then(info => console.log(info, 'creada'.green))
.catch(error => console.log(error));


