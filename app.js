const { multiplicar } = require('./helpers/multiplicar');
const argv = require('./config/yargs')
const colors= require('./theme/theme')



console.clear();

multiplicar(argv.b,argv.l,argv.h)
    .then(fileName => console.log(fileName.debug, 'creado'.help))
    .catch(err => console.log(err.error))
