const express = require('express')
const fruits = require('./data/fruits')
const path = require('path')

const HTML_PATH = path.join(__dirname, 'html')

let app = express()

app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('index', { name: req.query.name || 'World' })
})

app.get('/apples', (req, res) => {
  res.render('apples', { fruits })
})

app.listen(3001)
