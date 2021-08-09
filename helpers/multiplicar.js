const fs = require('fs');
const colors= require('../theme/theme')

const multiplicar = async (base,listar,hasta) => {
    try {
        let consola = '================\n'.error+`Tabla del : ${base}\n================\n`.error;
       let salida = '================\n'+`Tabla del : ${base}\n================\n`
        for (let index = 0; index <= hasta; index++) {
            salida += `${base}`+ `x` +`${index} = ${base * index}\n`
            consola += `${base}`+ `x`.warn +`${index} = ${base * index}\n`

        }
        const fileName = `./salida/tabla-${base}.txt`;
        fs.writeFile(fileName, salida, (err) => {
            if (err) throw (err);
        })
        if (listar) console.log(salida.info);
        return fileName;
    } catch (error) {
        throw eroor
    }

}

module.exports = {
    multiplicar
}