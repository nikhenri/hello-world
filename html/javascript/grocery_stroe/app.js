// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const list = document.querySelector("#list");



form.addEventListener('submit', function (e) {

    e.preventDefault();
    
    const product_obj = form.elements.product;
    const qty_obj = form.elements.qty;
    const li = document.createElement('li');
    li.innerText = `${qty_obj.value} ${product_obj.value}`;
    list.appendChild(li);
	product_obj.value = "";
	qty_obj.value = "";
})