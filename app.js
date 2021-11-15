
const { crearTabla } = require('./helpers/multiplicar.js');
const argv = require('./config/yargs');

console.clear()

crearTabla(argv.b,argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo, "creado"))
    .catch(err=> console.log(err));
//console.log(process.argv);
//console.log(argv);
//console.log('base: yargs', argv.base);
//const base =10;
//console.log(salida);

/*fs.writeFile(`tabla-${base}.txt`,salida, (err)=>{
    if (err) throw err;

    console.log('Archivo creado.')
})*/
//const [, , arg3='base=5'] = process.argv;
//const [, base = 6] = arg3.split('=');



