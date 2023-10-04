const hex=[0, 1,2,3,4,5,6,7,8,9,"A", "B", "C","D", "E", "F"];
//loop to make random no
// const btn=document.getElementById('btn');

const btnRed=document.getElementById('btnRed');
const btnGreen=document.getElementById('btnGreen');
const btnBlue=document.getElementById('btnBlue');

const color=document.querySelector('.color');

btnRed.addEventListener("click", bgColorRed);
btnGreen.addEventListener("click", bgColorGreen);
btnBlue.addEventListener("click", bgColorBlue);

function bgColorRed(){
    let hexColor="#FF";
    //loop that runs 6 times, each taking a random value

    for(let i=0; i<4; i++ ){
        //+= adds instead of overriding
        hexColor += hex[getRandomNumber()]
        // console.log(getRandomNumber())
    }

    color.textContent=hexColor;
    document.body.style.background=hexColor;
}
function bgColorGreen(){
    let hexColor="#";
    //loop that runs 6 times, each taking a random value

    for(let i=0; i<2; i++ ){
        //+= adds instead of overriding
        hexColor += hex[getRandomNumber()]
        // console.log(getRandomNumber())
    }

    hexColor+="FF";

    for(let i=0; i<2; i++ ){
        //+= adds instead of overriding
        hexColor += hex[getRandomNumber()]
        // console.log(getRandomNumber())
    }

    color.textContent=hexColor;
    document.body.style.background=hexColor;
}

function bgColorBlue(){
    let hexColor="#";
    //loop that runs 6 times, each taking a random value

    for(let i=0; i<4; i++ ){
        //+= adds instead of overriding
        hexColor += hex[getRandomNumber()]
        // console.log(getRandomNumber())
    }

    hexColor+="FF"

    color.textContent=hexColor;
    document.body.style.background=hexColor;
}




// function bgColor(){
//     let hexColor="#";
//     //loop that runs 6 times, each taking a random value

//     for(let i=0; i<6; i++ ){
//         //+= adds instead of overriding
//         hexColor += hex[getRandomNumber()]
//         // console.log(getRandomNumber())
//     }

//     color.textContent=hexColor;
//     document.body.style.background=hexColor;
// }



function getRandomNumber(){
    return Math.floor(Math.random()*hex.length);
    
}