const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe:'es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default:false,
        desc:'muesta la tabla en pantalla'

    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        desc:'numero hasta donde se multiplica la tabla',
        default:10,
        
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) throw 'la base no es numerica '
        if (isNaN(argv.h)||argv.h<0) throw 'El Número hasta debe ser númerico y positivo'
        return true;
        
        
    })
    .argv;

   module.exports=argv ;