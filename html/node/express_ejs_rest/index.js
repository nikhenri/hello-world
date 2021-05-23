console.log("woof!")

const express = require("express")
const app = express()
const {v4: uuid} = require('uuid') //descontring, put v4 in uuid

const methodOverride = require('method-override')
app.use(methodOverride('_method'))

app.use(express.urlencoded({ extended : true }))
app.use(express.json())

app.set('view engine', 'ejs')

const comments = [
    {usr: 'Shemale', comment: 'I love cock'},
    {usr: 'Tranny', comment: 'I love anal'},
    {usr: 'Ladyboy', comment: 'I love blowjob'},
]

app.get('/comment', (req, res) => {
    // render the coded html ejs file, pass comments
    res.render('comment/index.ejs', {comments, id: uuid()})
})

app.get('/comment/:page', (req, res) => {
    // check if page is usr name, return comment, otherwise, render page
    let idx =  comments.findIndex(elem => elem.usr === req.params.page)
    //if(comments.find(elem => elem.usr === req.params.page)) {
    console.log(`Page = ${req.params.page}, idx = ${idx}`)
    if(idx != -1) {
        //res.send(comments[idx].comment)
        res.send(comments[idx]['comment'])
    } else {
        res.render(`comment/${req.params.page}.ejs`, {comments, uuid})
    }

})

app.patch('/comment/:page', (req, res) => {
    //console.log(req)
    // req.params = all the encoding in the url, here containt :page
    // req.query = what is in the query string param, "localhost/comment/lol?woof=sdfs" give {woof: 'sdfs'}
    // req.body = what is in the body in form-urlencoded (not show in url)
    // we can have something in .query and .body at the same time
    console.log(`>> ${JSON.stringify(req.params)} : ${JSON.stringify(req.query)} : ${JSON.stringify(req.body)}`)
    res.send(`got a patch: ${JSON.stringify(req.query)}`)
})

app.post('/comment', (req, res) => {
    console.log('post something')
    console.log(`>> ${JSON.stringify(req.body)}`)
    const {user, comment} = req.body
    console.log(`user = ${user}\ncomment = ${comment}`)
    //comments.push({user, comment})
    //comments.push({usr: user, comment: comment})
    comments.push(req.body)
    console.log(comments);
    //res.send("Got ur dick pic")
    res.redirect('/comment') // redirect
})

app.get('/comment/new', (req, res) => {
    res.render('comment/new', {comments})
})


port = 80
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

