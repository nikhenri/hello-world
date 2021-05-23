let bt = document.querySelector('#bt');

bt.addEventListener('click', function (event) {
    console.log("Shemale");
    offset = 12.5;
    for (div of document.querySelectorAll('div')) {
        div.style.left = `${offset}%`;
        offset += 25;
        div.classList.add('move');
        
    }
    // 
});