const fs = require('fs');
const colors = require('colors');
const crearTabla = async(base = 7,listar = false, hasta=10) =>{
    try{
        let salida='';
    for(let i=1; i<=hasta; i++){
        let numero = base*i;
        salida+=`${base} * ${i} = ${numero}\n`;
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
    if (listar){
        console.log('================');
        console.log(`      Table del numero ${base}    `.rainbow);
        console.log('================');
        console.log(salida.random);
    }
    return `tabla-${base}.txt`
    }catch(error){
        throw error;
    }
}

module.exports = {
    crearTabla
}