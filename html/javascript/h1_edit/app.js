const inp = document.querySelector('#username');
const h1 = document.querySelector('h1');
inp.addEventListener('input', (e) => {
	if (inp.value == "") {
		h1.innerText = "Enter Your Username";
	} else {
		h1.innerText = "Welcome " + inp.value;
	}
})