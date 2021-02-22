const request = require("request");

const MAPBOX_ACCESS_KEY = "pk.eyJ1IjoiYnJ5bm5lOTgiLCJhIjoiY2tpOGo5bDZjMDZhcTJ1bjRjNjJ1YWN3ciJ9.I9IB-_oc6WoCANfcJr2EPw";
const MAPBOX_BASE_URL = "https://api.mapbox.com/geocoding/v5/mapbox.places/";

const geoCode = (location, callback) => {

    const url = MAPBOX_BASE_URL + location + ".json?access_token=" + MAPBOX_ACCESS_KEY;

    request.get({url: url, json: true}, (error, response) => {
        if (error) {
            callback("Unable to access mapbox services.", undefined);
        } else if (response.body.features.length === 0) {
            callback("No location found for given name.", undefined);
        } else {
            let positionArr = response.body.features[0].center;
            const latitude = positionArr[0];
            const longitude = positionArr[1];
            const locationName = response.body.features[0].place_name;
            callback(undefined, {
                latitude: latitude,
                longitude: longitude,
                locationName: locationName
            })
        }
    })
}

module.exports = geoCode;