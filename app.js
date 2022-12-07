const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=4198362410415db3501b1199a7297701&query=New%20York&units=f'

request({ url: url, json: true }, (error, response) => {
  const information = response.body.current
  const { temperature, feelslike, weather_descriptions } = information

  console.log(`${weather_descriptions}: It is currently ${temperature} degrees out. \nIt feels like ${feelslike} degrees out.`)
})

const geoCodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibWRlaGVycmVyYSIsImEiOiJjbGJkd3ZlOGMwNW5uM25tZmdrNjdmY3I2In0.9Gsby3FDw3iZpWcGViw4UA&limit=1'

request({ url: geoCodeUrl, json: true }, (error, response) => {
  const searchResponse = response.body.features[0]
  const [longitude, latitude] = searchResponse.center
  console.log(longitude, latitude)
})