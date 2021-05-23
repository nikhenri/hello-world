const methodOverride = require('method-override')
const express = require('express')
const ejsMate = require('ejs-mate')
const Review = require('./models/review')
const app = express();
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))
app.engine('ejs', ejsMate) //allow to define layout
const mongoose = require('mongoose')
const Campground = require('./models/campground')
const catchAsync = require('./utils/catchAsync')
const ExpressErr = require('./utils/ExpressErr')
// obj
const test = require('./test')
const t = new test('suck it')
t.sayHi()


mongoose.connect('mongodb://localhost:27017/yelp-camp',  {
    useNewUrlParser: true, 
    useCreateIndex: true,
    useUnifiedTopology: true
})

const db = mongoose.connection // alias
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
    console.log('Database connected')
})


app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/campgrounds', catchAsync(async (req, res) => {
    const camp = await Campground.find({})
    res.render('campgrounds/index', {camp})
}))

app.get('/campgrounds/new', async (req, res) => {
    res.render('campgrounds/new')
})

// add a fct wrapper for 'async' named 'catchAsync'
app.post('/campgrounds', catchAsync(async (req, res, next) => {
    const camp = new Campground(req.body.campForm)
    await camp.save();
    // res.send(req.body)
    res.redirect(`/campgrounds/${camp._id}`)

}))

app.post('/campgrounds/:id/reviews', catchAsync(async (req, res, next) => {
    // res.send("asshole")
    const camp = await Campground.findById(req.params.id)
    const rev = new Review(req.body.review)
    camp.reviews.push(rev);
    await rev.save();
    await camp.save();
    res.redirect(`/campgrounds/${camp._id}`)
}))

app.delete('/campgrounds/:id/reviews/:reviewId', catchAsync(async (req, res) => {
    const { id, reviewId } = req.params // take the id in the path
    await Review.findByIdAndDelete(reviewId)
    await Campground.findByIdAndUpdate(id, {$pull: {reviews: reviewId}}, {useFindAndModify: false})
    res.redirect(`/campgrounds/${id}`)
}))
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


app.get('/campgrounds/:id', catchAsync(async (req, res) => {
    const { id } = req.params // take the id in the path
    const camp = await Campground.findById(id).populate('reviews')
    //console.log(camp)
    // console.log(camp)
    res.render('campgrounds/show', {camp})
}))

app.get('/campgrounds/:id/edit', catchAsync(async (req, res) => {
    const { id } = req.params // take the id in the path
    const camp = await Campground.findById(id)
    res.render('campgrounds/edit', {camp})
}))

app.put('/campgrounds/:id', catchAsync(async (req, res) => {
    //res.send("WOOF")
    const { id } = req.params // take the id in the path
    const camp = await Campground.findByIdAndUpdate(id, {...req.body.campForm})
    res.redirect(`/campgrounds/${camp._id}`)
}))

app.delete('/campgrounds/:id', catchAsync(async (req, res) => {
    const { id } = req.params // take the id in the path
    const camp = await Campground.findByIdAndDelete(id)
    res.redirect(`/campgrounds`)
}))

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