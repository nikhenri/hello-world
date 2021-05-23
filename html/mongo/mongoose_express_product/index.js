// npm install express ejs mongoose
//npm uninstall mongoose
//npm install mongoose@5.11.15
//npm install method-override

console.log("woof!")
const express = require("express")
const methodOverride = require('method-override')

const app = express()
app.use(methodOverride('_method')) // this allow us to do 'custom' method in html
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true})) // need for post
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



// localhost/
app.get('/products', async (req, res) => { // async in order to await
    const products = await Product.find({})
    //res.send(`>> ${JSON.stringify(products)}`)
    res.render('products/index', {products}) // return the render file under /views/product/index.ejs
})

app.get('/products/new', async (req, res) => {
    res.render('products/new') // render page
})

app.get('/products/:id', async (req, res) => {
    const { id } = req.params // take the id in the path
    console.log(`show: ${id}`)
    const product = await Product.findById(id) // search it
    //console.log(product)
    res.render('products/show', {product}) // render page
})

app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params // take the id in the path
    console.log(`edit get: ${id}`)
    const product = await Product.findById(id) // search it
    //console.log(product)
    res.render('products/edit', {product}) // render page
})

app.put('/products/:id', async (req, res) => {
    const { id } = req.params // take the id in the path
    console.log(`edit put: ${id}`)
    console.log(req.body)
    const product =  await Product.findByIdAndUpdate(id, req.body)
    res.redirect(`/products/${product._id}`)
})

app.delete('/products/:id', async (req, res) => {
    const { id } = req.params // take the id in the path
    console.log(`delete: ${id}`)
    const deletedProduct =  await Product.findByIdAndDelete(id, req.body)
    res.redirect(`/products`)
})

app.post('/products', async (req, res) => { //from new.ejs
    console.log(req.body)
    const newProduct = new Product(req.body)
    await newProduct.save()
    console.log(newProduct)
    res.redirect(`/products/${newProduct._id}`)
})

app.get('*', (req, res) => {
    res.send("dunno wat to do")
})

port = 80
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})

