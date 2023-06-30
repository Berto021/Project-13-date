let button = document.querySelector('#no');
let height = window.innerHeight - 300;
let width = window.innerWidth - 300;
const cat = document.querySelector('.background-sad-cat')
const box = document.querySelector('.box')
const textBox = document.querySelector('.text-container')


button.addEventListener('mouseover', function () {
    button.style.position = "absolute"
    button.style.top = Math.random() * height + "px";
    button.style.left = Math.random() * width + "px";
})
button.addEventListener('click', function(){
    box.style.display = 'none'
    cat.style.display = 'flex'
    textBox.style.display = 'none'
    
})

