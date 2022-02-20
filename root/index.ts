let express = require('express')
let app = express()
require('dotenv').config()
let BodyParser = require('body-parser')
let cors = require('cors')
let morgan = require('morgan')
app.use(morgan('dev'))


app.use(BodyParser.urlencoded({extended: true}))
app.use(BodyParser.json())

let jwt = require("jsonwebtoken")
let path = require('path')

app.use(express.static('./src/upload/'))
app.use(express.static('./src/upload/'))
app.use('/src', express.static(path.join(__dirname + '/src')))
let router = require('./src/index')



// use cors
app.use(cors('*'))

app.use('/', cors('*'), router)



app.listen(3002, function(){
    console.log('server run on port 3002')
})