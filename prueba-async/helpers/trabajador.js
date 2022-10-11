const fs = require('fs')



const crearTrabajador = async(status,name) => {

try{
    if(status){
        
        let trabajador = name

        fs.writeFileSync(`trabajador-${name}.txt`, trabajador)
    
        return `trabajador ${name}.txt`
    }
    
else{
    return 'trabajador no creado'
}
        
    
    
}catch(err){
    throw  err
    
}


}


module.exports = {
    crearTrabajador
}