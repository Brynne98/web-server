const request = require("request");

const WEATHER_STACK_ACCESS_KEY = "101b90eac04a2ec40f8747db6f9bf755";
const WEATHER_STACK_BASE_URL = "http://api.weatherstack.com/current?access_key=" + WEATHER_STACK_ACCESS_KEY;

const forecast = (latitude, longitude, callback) => {

    let url = WEATHER_STACK_BASE_URL + "&query=" + latitude + "," + longitude;

    request.get({url: url, json: true}, (error, response) => {
        if (error) {
            callback("Unable to connect to location services.", undefined);
        } else if (response.body.error) {
            callback("Unable to find location. Try another search.", undefined);
        } else {
            const currentData = response.body.current;
            let data = {
                description: currentData.weather_descriptions[0],
                temperature: currentData.temperature,
                feelsLike: currentData.feelslike
            }
            callback(undefined, data)
        }
    })
}

module.exports = forecast;