const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=4198362410415db3501b1199a7297701&query=New%20York&units=f'

request({ url: url, json: true}, (error, response) => {
  const information = response.body.current
  const {temp, feelslike, weather_descriptions} = information

  console.log(`${weather_descriptions}: It is currently ${temp} degrees out. \nIt feels like ${feelslike} degrees out.`)
})