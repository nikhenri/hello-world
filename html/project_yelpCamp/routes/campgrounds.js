const express = require('express');
const router = express.Router()
const catchAsync = require('../utils/catchAsync')
const Campground = require('../models/campground')

router.get('', catchAsync(async (req, res) => {
    const camp = await Campground.find({})
    res.render('campgrounds/index', {camp})
}))

router.get('/new', async (req, res) => {
    res.render('campgrounds/new')
})

// add a fct wrrouterer for 'async' named 'catchAsync'
router.post('/', catchAsync(async (req, res, next) => {
    const camp = new Campground(req.body.campForm)
    await camp.save();
    // res.send(req.body)
    req.flash('suckcess', 'New campground made')
    res.redirect(`/campgrounds/${camp._id}`)

}))


router.get('/:id', catchAsync(async (req, res) => {
    const { id } = req.params // take the id in the path
    const camp = await Campground.findById(id).populate('reviews')
    //console.log(camp)
    // console.log(camp)
    res.render('campgrounds/show', {camp})
}))

router.get('/:id/edit', catchAsync(async (req, res) => {
    const { id } = req.params // take the id in the path
    const camp = await Campground.findById(id)
    res.render('campgrounds/edit', {camp})
}))

router.put('/:id', catchAsync(async (req, res) => {
    //res.send("WOOF")
    const { id } = req.params // take the id in the path
    const camp = await Campground.findByIdAndUpdate(id, {...req.body.campForm})
    res.redirect(`/campgrounds/${camp._id}`)
}))

router.delete('/:id', catchAsync(async (req, res) => {
    const { id } = req.params // take the id in the path
    const camp = await Campground.findByIdAndDelete(id)
    res.redirect(`/campgrounds`)
}))

module.exports = router