const fs = require('fs') 
  // tengo que requerir el module de node

const colors = require('colors');


const crearArchivo = async(base,sa,limi) => {

      try{
            console.log("===========================================".green)
            console.log(' Tabla del:'.green, colors.blue(base))
            console.log("===========================================".green)
            
            let salida = ''
            let consola = '';
            
                for(let i = 1 ; i<=limi ;i++ ){
                salida += `${base} x ${i} = ${base*i}\n`
                consola += `${base} ${'x'.green} ${i} ${'='.green} ${base*i}\n`   // se crean 2 diferentes ya que los que se muestra en consola con los colores da un error al guardar los archivos txt por ello salida si los mostrara correctamente
            }
            
            if(sa){
             console.log(consola)
          
            }
           
            
                fs.writeFileSync(`./salida/tabla-${base}.txt`,salida); 
                return `tabla-${base}.txt`
      }catch(error){
        throw error
      }  
            
            
            
            

    }



module.exports =  {

  crearArchivo
}