
 require('colors');


const { number } = require('yargs');
const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('yargs').option('b',{
    alias:'base',
    type:'number',
    demandOption:true,
    describe:'es la base de la tabla de multiplicar'
}).option('h',{
  alias:'hasta',
  type:'number',
 default:10,
 describe:'es el limite hasta donde se multiplica la tabla'
}).option('l',{
  alias:'listar',  
  type:'boolean',
  default:false,
  describe:'muestra la tabla en consola'

}).check((argv, options) =>{
if(isNaN(argv.b)){
    throw 'la base tiene que ser un numero'
}else{
    return true
}
} )
.argv




// console.log(process.argv)
// console.log(argv.l)

// console.log('base: yargs', argv)


// console.log(process.argv)


// const [ , ,arg3 = 'base=5'] = process.argv    // process.argv direcciones de archivos si escribimos algo depues de node app.js ese sera el 3 valor que podremos guardar en una constante
// const [,base = 5 ] = arg3.split('=')

// console.log(base)

// // const base = arg3;



// console.log(process.argv)




// console.log(typeof crearArchivo)


console.clear();


crearArchivo(argv.b,argv.l,argv.h)
.then(nombreArchivo => console.log(nombreArchivo.rainbow,' creado'))
.catch(err => console.log(err))





// const base = 2;
// let salida = ''




                                                              //IMPORTANTE    este ejemplo se comento por que se paso ala carpeta multiplicar para que esta carpeta quede limpia de codigo.
// for(let i = 1 ; i<=10 ;i++ ){

// salida += `${base} x ${i} = ${base*i}\n`
    
// }

// // fs.writeFile( `tabla-${base}.txt`,salida, (err) => {     // este es el camino como se hace pero vamosa mirar un ejemplo mas sencillo utilizando el ejemplo de abajo
// //     if(err) throw err

// //     console.log('The file has been saved')
// // }) 


// fs.writeFileSync(`tabla-${base}.txt`,salida); 


// console.log(`tabla-${base}.txt creado`)