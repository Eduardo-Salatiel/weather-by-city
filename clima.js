const axios = require('axios');

const getWeatherByCity = async (lat, lon) =>{
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lon }&appid=2beaffd0caf4acbf2d3e318a582b5bb2&units=metric`)

    return resp.data.main.temp
}

module.exports = {
    getWeatherByCity
}