const fetch = require('node-fetch')

const geocode = (address, callback) => {

    const URL = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + address + ".json?access_token=pk.eyJ1Ijoic3VydmVydWxlcyIsImEiOiJja2pjdjIzOWEwN3QzMnFyeGdkZmZsaWR6In0.6BLg7P0vTXABY8aY8dStCA";
    const options = {method: 'GET'};
    fetch(URL, options)
        .then(response => response.json())
        .then(data => { 
            
            if (data.features) {
                callback(undefined, {
                    location: data.features[0].place_name,
                    longitude: data.features[0].center[0],
                    latitude:  data.features[0].center[1] 
                 })
            } else {
                callback('location not found')
            }
    })
    .catch(error => callback("Error in Service Execution" + error))

}

geocode('New York' , (error, data) => {
    console.log("Error: " + error)
    console.log("Data: " + JSON.stringify(data))
})

module.exports = geocode