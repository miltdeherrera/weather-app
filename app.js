const request = require('request')
const forecast = require('./utils/forecast')
const geocode = require('./utils/geocode')

geocode('Long Beach, CA', (error, data) => {
  if (error) {
    console.log(error)
  } else {
    console.log('Data', data)
  }
})

forecast(34.0522, -118.2437, (error, data) => {
  console.log('Error', error)
  console.log('Data', data)
})