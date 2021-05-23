console.log("woof!")

const express = require("express")
const path = require('path')
const app = express()

app.set('view engine', 'ejs')
console.log(__dirname)
//console.log(__dirname + '/views')
//console.log(path.join(__dirname, '/views')) // put the slash according to os

// set abs path for the views
app.set('views', path.join(__dirname, '/views'))
// localhost/
app.get('/', (req, res) => {
    //res.send("Allo Fannie")
	res.render('home.ejs') //views/home.ejs 
})


port = 80
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

