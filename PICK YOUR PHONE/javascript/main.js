document.querySelector('.result').innerHTML=localStorage.getItem("textvalue");

const popup = document.querySelector('.popup');
const close = document.querySelector('.close');

window.onload = function(){
    setTimeout(function(){
        popup.style.display = "none"
    },1000)
}

close.addEventListener('click', () => {
    popup.style.display = "none"
})