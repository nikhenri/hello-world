const express = require('express')
const methodOverride = require('method-override') // allow to use delete, put route instead of only post or get
const ejsMate = require('ejs-mate') //render
const mongoose = require('mongoose') //moosoe db
const session = require('express-session')
const flash = require('connect-flash')

const routesCampgrounds = require('./routes/campgrounds')
const routesReview = require('./routes/review')

//const catchAsync = require('./utils/catchAsync')
//const ExpressErr = require('./utils/ExpressErr')

const app = express();
app.use(methodOverride('_method'))
app.engine('ejs', ejsMate) //allow to define layout
app.use(express.urlencoded({extended:true})) // parse JSON
app.set('view engine', 'ejs')
const sessionConfig = {
    secret: 'thisIsASecret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 1000*60*60*24*7,
        maxAge: 1000*60*60*24*7
    }

}
app.use(session(sessionConfig)) //create cookie sid

app.use(flash())
app.use((req, res, next) => { //we save to local variable on every request
    res.locals.suckcess = req.flash('suckcess')
    next()
})
// obj test-----------
const test = require('./test')
const t = new test('suck it')
t.sayHi()
// --------

mongoose.connect('mongodb://localhost:27017/yelp-camp',  {
    useNewUrlParser: true, 
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

const db = mongoose.connection // alias
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
    console.log('Database connected')
})

// this allow to access the file from anywhere in the code
// also the file under public are route automticly
// ex: http://localhost/hello.js
app.use(express.static('public'))

app.use('/campgrounds', routesCampgrounds)
app.use('/campgrounds/:id/reviews', routesReview)
app.get('/', (req, res) => {
    res.render('home')
})

// app.post('/campgrounds', async (req, res, next) => {
//     try {
//     const camp = new Campground(req.body.campForm)
//     await camp.save();
//     // res.send(req.body)
//     res.redirect(`/campgrounds/${camp._id}`)
//     } catch(e) {
//         next(e)
//     }
// })

// no route match
// app.all('*', (req, res, next) => {
//     throw new ExpressErr("not foundz", 401)
// })
// error handling
// app.use((err, req, res, next) => {
//     // equalt to statusCode = err.statusCode; message = err.message
//     const {stack, statusCode= 500, message= "Error bro"} = err
//     res.status(statusCode)
//     //res.send(message)
//     //console.log(JSON.stringify(err))
//     res.render('error', {statusCode, message, stack})
// })

app.listen(80, () => {
    console.log('Waiting')
})