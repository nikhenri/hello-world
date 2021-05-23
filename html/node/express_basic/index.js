console.log("woof!")
const express = require("express")
console.log(express)

const app = express()

// app.use((req, res) => {
//     console.log("u fuck")
//     res.send("Allo Fannie")
// })

// localhost/
app.get('/', (req, res) => {
    res.send("Allo Fannie")
})

// localhost/cats
app.get('/cats', (req, res) => {
    res.send("Pussy")
})

// localhost/cats
app.post('/cats', (req, res) => {
    res.send("post")
})

// localhost/r/something
app.get('/r/:str', (req, res) => {
    console.log(req.params)    
    res.send(`u enter: ${req.params.str}`)
})

// localhost/search?porn=gay&orientation=homosexual
app.get('/search', (req, res) => {
    console.log(req.params)    
    console.log(req.query)    
    res.send(`u search fpr: ${req.query.porn} ${req.query.orientation}`)
})


app.get('*', (req, res) => {
    res.send("dunno wat to do")
})

port = 80
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})

