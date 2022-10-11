const {crearTrabajador} = require('./helpers/trabajador')

console.clear();



const estado = true;
const nombre = 'fabio'


crearTrabajador(estado,nombre)
.then(trabajador => console.log(trabajador))
.catch(trabajador => console.log(trabajador))

