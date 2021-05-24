const express = require('express');
const router = express.Router({mergeParams: true})
const catchAsync = require('../utils/catchAsync')
const Campground = require('../models/campground')
const Review = require('../models/review')

router.post('/', catchAsync(async (req, res, next) => {
    // res.send("asshole")
    const camp = await Campground.findById(req.params.id)
    const rev = new Review(req.body.review)
    console.log(camp)
    console.log(rev)
    camp.reviews.push(rev);
    await rev.save();
    await camp.save();
    res.redirect(`/campgrounds/${camp._id}`)
}))

router.delete('/:reviewId', catchAsync(async (req, res) => {
    const { id, reviewId } = req.params // take the id in the path
    await Review.findByIdAndDelete(reviewId)
    await Campground.findByIdAndUpdate(id, {$pull: {reviews: reviewId}})
    res.redirect(`/campgrounds/${id}`)
}))


module.exports = router