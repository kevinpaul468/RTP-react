const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const port = 5000
const sessionUser = require('./routers/sessionUser')
const register = require('./routers/register')

app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(session({
    secret: 'i forgot to add this',
    resave: false,
    saveUninitialized: true,
    cookie: { 
        secure: false,
        timeout: 60*60*24*365*1000
    }
}))

app.use(sessionUser)
app.use(register)




app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})