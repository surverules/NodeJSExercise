
//https://app.climacell.co/development/keys  -- Weather API for Testing
//https://data.climacell.co/v4/timelines?apikey=aZK6oaNa5snFOQcuTgCNuFYuYQ1Wtmz3&fields=&timesteps=1h&location=37.8267,-122.4233

//weather Stack API - Token - 97bbead40adf0a4b465c7a4394f22176
//http://api.weatherstack.com/current?access_key=97bbead40adf0a4b465c7a4394f22176&query=New%20York
const fetch = require('node-fetch');

//let url = 'http://api.weatherstack.com/current';
let url = 'http://api.weatherstack.com/current?access_key=97bbead40adf0a4b465c7a4394f22176&query=New%20York';

let options = {method: 'GET'};

fetch(url, options)
  .then(res => res.json())
  .then(json => dataHandling(json))
  .catch(error => errorHandling(error));


  const dataHandling = (res) =>  {
      if (res.current) {
        console.log("Current tempature is : " + res.current.temperature  + " but feels like temparature is: " + res.current.feelslike)
        //console.log(res)
      } else {
        console.log("location information not received")
      }
}

  const errorHandling = (res) =>  {
    if (res.success) {
      console.log("success" + res.body)
      return true 
    }
    console.log("error occured id: " + res)

}


//https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic3VydmVydWxlcyIsImEiOiJja2pjdjIzOWEwN3QzMnFyeGdkZmZsaWR6In0.6BLg7P0vTXABY8aY8dStCA

const mapURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic3VydmVydWxlcyIsImEiOiJja2pjdjIzOWEwN3QzMnFyeGdkZmZsaWR6In0.6BLg7P0vTXABY8aY8dStCA";

fetch(mapURL, options)
.then(res => res.json())
.then(data =>  console.log(data.features[0].center[0] + " and " + data.features[0].center[1]))
.catch(error => console.log(error))