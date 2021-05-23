const axios = require('axios')
const express = require('express')
const app = express();

const mongoose = require('mongoose')
const Campground = require('../models/campground')

const cities = require('./cities')
const {places, descriptors} = require('./seedHelpers')

//console.log(cities)
//process.exit()

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

const seedDB = async () => {
    console.log('here')
    await Campground.deleteMany({})
    // const c = new Campground({title: 'pruple field'})
    // await c.save()
    // console.log(await Campground.find({}))
    // process.exit()


    // city: "Los Angeles",
    // growth_from_2000_to_2013: "4.8%",
    // latitude: 34.0522342,
    // longitude: -118.2436849,
    // population: "3884307",
    // rank: "2",
    // state: "California",


    // const CampgroundSchema = new Schema ({
    //     title : String,
    //     price : String,
    //     description: String,
    //     location: String
    
    // })
    const itt = 50
    const desc_array = await axios.get(`https://baconipsum.com/api?type=meat-and-filler&paras=${itt}`);

    for(let i = 0; i <= itt-1; i++) {
        // console.log(`Generating ${i}`)
        const rand1000 = Math.floor(Math.random() * cities.length)
        const randplace = Math.floor(Math.random() * descriptors.length)
        
        const price = Math.floor(Math.random() * 20) + 10
        const c = new Campground({location: `${cities[rand1000].city},  ${cities[rand1000].state}`,
                                  title: `${descriptors[randplace]} ${places[randplace]}`,
                                  img: `https://picsum.photos/seed/${Math.floor(Math.random() * 100)}/300/300`,
                                  description: `${desc_array.data[i]}`,
                                  price
                                 })

        await c.save();
    }
    console.log(await Campground.find({}))
    //process.exit()
}
seedDB().then(()=> {
    
    mongoose.connection.close()
})
