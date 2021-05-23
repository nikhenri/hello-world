console.log("woof!")

const express = require("express")
const app = express()
const { exec } = require("child_process");
let bodyParser = require('body-parser');

// will allow access to everything in the same repo
// localhost/home.html
// localhost/index.js
// localhost/   (index.html)
app.use(express.static('.')); 

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
// --------------------------------------------------------
app.post('/process_post', (req, res) => {
   console.log('post something')
   console.log(`>> ${JSON.stringify(req.body)}`)
   res.end(JSON.stringify( Object.assign({you:'gay'},req.body) ));
   console.log('done')
})
// --------------------------------------------------------
app.get('/process_get', (req, res) => {
   console.log('get something')
   console.log(`>> ${JSON.stringify(req.query)}`)
   res.end(JSON.stringify( Object.assign({you:'gay'},req.query) ));
   console.log('done')
})
// --------------------------------------------------------
app.get('/cmd_get', (req, res) => {
   console.log('get something')
   console.log(`>> ${JSON.stringify(req.query)}`)
   exec(req.query.cmd, (error, stdout, stderr) => {
	if (error) {
		console.log(`error: ${error.message}`);
		return;
	} 
	if (stderr) {
		console.log(`stderr: ${stderr}`);
		return;
	}
	console.log(`stdout: ${stdout}`);
	res.end(stdout);
	});
   console.log('done')
})


// --------------------------------------------------------
port = 80
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

