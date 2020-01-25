// Importing modules
require('dotenv').config();

const path = require('path')

const express = require('express')
const expressEdge = require('express-edge')
const app = new express()
const edge = require('edge.js')

const mongoose = require('mongoose')
mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const expressSession = require('express-session')
const connectMongo = require('connect-mongo')
const connectFlash = require('connect-flash')

// Controllers
const homePageController = require('./controllers/homePage')
const faqPageController = require('./controllers/faqPage')
const paidBribePageController = require('./controllers/paidBribePage')
const refusedBribePageController = require('./controllers/refusedBribePage');

const storePaidBribeController = require('./controllers/storePaidBribe')
const storeRefusedBribeController = require('./controllers/storeRefusedBribe');

// Middlewares
const mongoStore = connectMongo(expressSession)
app.use(expressSession({
    name: process.env.EXPRESS_SESSION_NAME,
    resave: true,
    saveUninitialized: true,
    secret: process.env.EXPRESS_SESSION_SECRET,
    store: new mongoStore({
        mongooseConnection: mongoose.connection
    })
}));
app.use(connectFlash())

app.use(express.static('public'))
app.use(expressEdge.engine)

// Static Directory
app.set('views',`${__dirname}/views`)

// Routes
app.get('/', homePageController)
app.get('/paidbribe', paidBribePageController)
app.get('/faq', faqPageController)
app.get('/refusedbribe', refusedBribePageController)
app.post('/submit/paidbribe', storePaidBribeController)
app.post('/submit/refusedbribe', storeRefusedBribeController)

app.use((req, res) => {
    res.render('not-found')
})

app.listen(process.env.PORT, () => {
    console.log(`App listening on port ${process.env.PORT}`);
})
