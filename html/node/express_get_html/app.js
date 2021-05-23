console.log("prout!")





// ---------------------------------------------------------------
const post_json = document.querySelector('#post_json');
post_json.addEventListener('click', async function (e) {
	const res = await axios.post(`http://localhost/process_post`,  { hello: 'post_json' });
	console.log(res.data)
})
// ---------------------------------------------------------------
const post_url_encoded = document.querySelector('#post_url_encoded');
post_url_encoded.addEventListener('click', async function (e) {
	const res = await axios.post(`http://localhost/process_post`,  'hello=post_url_encoded');
	console.log(res.data)
})
// ---------------------------------------------------------------
const get_json = document.querySelector('#get_json');
get_json.addEventListener('click', async function (e) {
	//const res = await axios.get(`http://localhost/process_get?hello=get_json`);
	const res = await axios.get(`http://localhost/process_get`,  { params: { hello: 'get_json' } });
	console.log(res.data)
})
// ---------------------------------------------------------------
const form = document.querySelector('#exec');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const command = form.elements.cmd.value;
    const res = await axios.get(`http://localhost/cmd_get`,  { params: { cmd: command } });
    console.log(res.data)
    //form.elements.query.value = '';
})

	// const res = await axios.post(`http://localhost/process_post`,  'hello=world');



/* form.addEventListener('submit', async function (e) {
    e.preventDefault();
	console.log('yo')
    //const searchTerm = form.elements.query.value;
    const config = { params: { q: 'shemale' } }
   // const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
	
	const res = await axios.post(`http://localhost/process_post`,  { hello: 'YOU' });
	// const res = await axios.post(`http://localhost/process_post`,  'hello=world');
	console.log('done')
	console.log(res)
}) */
