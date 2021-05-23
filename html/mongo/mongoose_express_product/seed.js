// This file is for TESTING the DB
//CMD:
//> node seed.js


//> mongo
//> show dbs
// admin          0.000GB
// config         0.000GB
// farmStand      0.000GB
// local          0.000GB

//> use farmStand
//> show collections
// products

//> db.products.find()
// { "_id" : ObjectId("602f319946f68e0420f3a623"), "name" : "Ruby Grapefuit", "price" : 1.99, "__v" : 0 }

//> db.products.remove({})
// WriteResult({ "nRemoved" : 1 })

const mongoose = require('mongoose')
const Product = require('./models/product') // import product.js

// testMovie = name of DB (mongo: use testMovie)
mongoose.connect('mongodb://localhost:27017/farmStand', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("CONnected")
    })
    .catch(err => {
        console.log("U fail to connect BRA")
    });


/*
const p = new Product({
    name: 'Ruby Grapefuit',
    price: 1.99,
    category: 'fruit'
})

p.save().then(p => {
    console.log(p)
})
.catch(e => {
    console.log(e)
}) 
*/
Product.collection.drop(); // empty the collection 'products'

const seedProducts = [
    {
        name: 'Fairy Eggplant',
        price: 1.00,
        category: 'vegetable'
    },
    {
        name: 'Organic Goddess Melon',
        price: 4.99,
        category: 'fruit'
    },
    {
        name: 'Organic Mini Seedless Watermelon',
        price: 3.99,
        category: 'fruit'
    },
    {
        name: 'Organic Celery',
        price: 1.50,
        category: 'vegetable'
    },
    {
        name: 'Chocolate Whole Milk',
        price: 2.69,
        category: 'dairy'
    },
]

Product.insertMany(seedProducts)
    .then(res => {
        console.log(res)
        process.exit()
    })
    .catch(e => {
        console.log(e)
        process.exit()
    })

