const mongoose = require('mongoose')


//  We create the format (Schema) of the data that we will put in the data base
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    category: {
        type: String,
        enum: ['fruit', 'vegetable', 'dairy']
    }
})
// create kind of a class
const Product = mongoose.model('Product', productSchema)

// export so we can require it
module.exports = Product