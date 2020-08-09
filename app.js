const express = require('express')
const app = express()
const axios = require('axios')
const { urlencoded } = require('express')
const bodyParser = require('body-parser')
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/results', (req, res) => {
  axios
    .get('https://www.omdbapi.com/', {
      params: {
        apikey: '48f52551',
        s: 'demolition'
      }
    })
    .then(function (response) {
      let movies = response.data
      console.log(movies)
      res.render('home', { movies })
    })
    .catch(function (error) {
      console.log(error)
    })
    .finally(function () {
      // always executed
    })
})

app.post('/movieRequest', (req, res) => {
  let title = req.body.title
  console.log(title)
})

app.listen(3000, console.log('app running on port 3000'))
