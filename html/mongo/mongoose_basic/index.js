const mongoose = require('mongoose')

// testMovie = name of DB (mongo: use testMovie)
mongoose.connect('mongodb://localhost:27017/testMovie', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("CONnected")
    })
    .catch(err => {
        console.log("U fail to connect BRA")
    });

// create the format of the database
const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rathing: String
});

// create a new COLLECTION using the movieSchema schema (mongo db.movies) (name changed from Movie to movies)
// name, 'Movie' must be 1 word and start with uppercase
const Movie = mongoose.model('Movie', movieSchema)
// create an element in the DB
const ChickWithDick = new  Movie({title: "Chick with dick", year: 2021, score: 10, rathing: "20/10"})
// save the element
ChickWithDick.save()

// mongo db.Movie.find()

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   // we're connected!
//   console.log('Connected u fuck')
// });
