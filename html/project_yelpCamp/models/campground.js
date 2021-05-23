const mongoose = require('mongoose')
const Review = require('./review')

const Schema = mongoose.Schema // alisas

const CampgroundSchema = new Schema ({
    title : String,
    img: String,
    price : Number,
    description: String,
    location: String,
    reviews: [
        {
            type: Schema.Types.ObjectId, //array of review schema
            ref: 'Review'
        }
    ]
})

// this middleware will run each time we do "findOneAndDelete"
CampgroundSchema.post('findOneAndDelete', async function (doc) {
    if (doc) {
        await Review.deleteMany({
            _id: {$in: doc.reviews} //delete all reviews in 
        })
    }

})

module.exports = mongoose.model('Campground', CampgroundSchema)