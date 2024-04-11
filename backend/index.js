const express = require('express')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const port = 7000
const sessionUser = require('./routers/sessionUser')
const register = require('./routers/register')
const login = require('./routers/login')
const logout = require('./routers/logout')
const cors = require('cors')
app = express()

app.use(bodyParser.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(session({
    secret: 'i forgot to add this',
    resave: false,
    saveUninitialized: true,
    cookie: { 
        secure: false,
        maxAge: 60*60*24*365*1000
    }
}))

app.use(cors())
app.use(sessionUser);
app.use(register);
app.use(login);
app.use(logout);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})