const colorBtn = document.querySelector('.colorBtn');
const bodyBg = document.querySelector('body');

const colors = ['yellow','red','green','#3b5998'];

colorBtn.addEventListener('click',changeColor);

function changeColor(){
    let random = Math.floor(Math.random()*colors.length)
    bodyBg.style.background = colors[random];
}