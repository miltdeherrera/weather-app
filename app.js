const forecast = require('./utils/forecast')
const geocode = require('./utils/geocode')

// location from command line argument
const locationString = process.argv.slice(2).join(' ')
if (locationString === '') {
  return console.log('Enter a location to search')
}

geocode(locationString, (error, { latitude, longitude, location }) => {
  if (error) {
    return console.log(error)
  }

  forecast(latitude, longitude, (error, forecastData) => {
    if (error) {
      return console.log('Error', error)
    }
    
    console.log(location)
    console.log(forecastData)
  })
})