//array of colors
const colors=["green", "red", "rgba(133,122,200)","pink", "yellow"];

const btn=document.getElementById('btn');
const color=document.querySelector(".color");

btn.addEventListener('click', bgColor);

function bgColor(){
    //get random no b/w 0-2
    const randomNumber=getRandomNumber();

    document.body.style.backgroundColor=colors[randomNumber];
    color.textContent=colors[randomNumber];
};

function getRandomNumber(){
return Math.floor(Math.random()*colors.length);
};