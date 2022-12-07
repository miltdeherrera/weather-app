const request = require('request')

const forecast = (latitude, longitude, callback) => {
  // 34.0522,118.2437
  const url = 'http://api.weatherstack.com/current?access_key=4198362410415db3501b1199a7297701&query=' + latitude + ',' + longitude + '&units=f'

  console.log(url)

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to weatherstack API')
    } else if (response.body.success === false) {
      callback('No search results found')
    } else {
      const information = response.body.current
      const { temperature, feelslike, weather_descriptions } = information

      callback(undefined, `${weather_descriptions}: It is currently ${temperature} degrees out. \nIt feels like ${feelslike} degrees out.`)
    }
  })
}


module.exports = forecast