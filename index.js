const express = require('express')
const app = express()

// Data Middleware
// allow form data to be processed into req.body
app.use(express.urlencoded({extended: false}))

//tells express to recognized req.body as a json object
app.use(express.json())

//create router
app.use('./', (req, res)=> {
    res.send('You have hit the home route')
})

app.use('./users', require('./controllers/pets'))

app.listen(3000, ()=>{
    console.log('Wow!')
})