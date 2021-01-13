const geocode = require('./utils/geocode')
const weather = require('./utils/weather')

const city = process.argv[2]

if (city) {
geocode(city , (error, data) => {

  if (data) {
    console.log(data.location)
    weather(data.latitude, data.longitude, (err, resdata) => {
      if (err){
        console.log(err)
      } else {
        console.log(resdata)
      }
    })
  } else {
    console.log("Exception in the geocode: " +  error)
  }

})
} else {
  console.log("Enter city name in argument")
}


