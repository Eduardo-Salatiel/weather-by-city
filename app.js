const argv = require("./config/yargs").argv;
const lugar = require("./lugar/lugar");
const clima = require("./clima");

//lugar.getLugarLatLng(argv.direccion).then(console.log);
/*
clima
  .getWeatherByCity(19.33429, -99.14262)
  .then(console.log)
  .catch(console.log);

*/

const getInfo = async (direccion) => {
    try {
        const dir = await lugar.getLugarLatLng(direccion);
    const info = await clima.getWeatherByCity(dir.lat, dir.lng);

    return `El clima de ${ dir.direccion } es de ${ info }`
    } catch (error) {
       return `No se pudo determinar el clima de ${ direccion }`
    }
    
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)