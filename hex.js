const hex=[0, 1,2,3,4,5,6,7,8,9,"A", "B", "C","D", "E", "F"];
//loop to make random no
const btn=document.getElementById('btn');
const color=document.querySelector('.color');

btn.addEventListener("click", bgColor);

function bgColor(){
    let hexColor="#";
    //loop that runs 6 times, each taking a random value

    for(let i=0; i<6; i++ ){
        //+= adds instead of overriding
        hexColor += hex[getRandomNumber()]
        // console.log(getRandomNumber())
    }

    color.textContent=hexColor;
    document.body.style.background=hexColor;
}

function getRandomNumber(){
    return Math.floor(Math.random()*hex.length);
    
}