const fetch = require('node-fetch');


const getWeather =  function (longitude, latitude, callback) {
    let url = 'http://api.weatherstack.com/current?access_key=97bbead40adf0a4b465c7a4394f22176&query='+ longitude + ',' + latitude;
    let options = {method: 'GET'};

fetch(url, options)
  .then(res => res.json())
  .then(json => dataHandling(json, callback))
  .catch(error => errorHandling(error, callback));

}

const dataHandling = (res, callback) =>  {
    if (res.current) {
      callback(undefined, "Current tempature is : " + res.current.temperature  + " but feels like temparature is: " + res.current.feelslike)
    } else {
      callback('location information not received', undefined)
    }
}

const errorHandling = (error, callback) =>  {
   callback('Error occured in calling the end point' + error, undefined)
}

module.exports = getWeather