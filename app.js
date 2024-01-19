let gameSeq=[];
let userSeq=[];

let btns = ["yellow","red","purple","green"]


let started = false;
let LeveL = 0;

let h2 = document.querySelector("h2");


// this is for keypress and game start and Levelup
document.addEventListener("keypress",function(){ 
    if(started == false){
    console.log("game is started");
    started = true;
    LeveLUp();
  }
  });

  function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function () {
       btn.classList.remove("flash")
    }, 250);
   }

   function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function () {
       btn.classList.remove("userflash")
    }, 250);
   }

  function LeveLUp(){
    userSeq = [];
    LeveL++;
    h2.innerText = `LeveL ${LeveL}`;

    // this is for random btn chooose
    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
    
}


function checkAns(Idx){
    if (userSeq[Idx] === gameSeq[Idx]){
        if(userSeq.length == gameSeq.length){
           setTimeout(LeveLUp,1000);
        }
    }else{
        h2.innerHTML = `game over! Your Score was <b>${LeveL}</b> <br> press any key to start`;
        document.querySelector("body").style.backgroundColor = " red";
        setTimeout(function(){

        document.querySelector("body").style.backgroundColor= "white";
        
       } ,150);
        reset();

    }
}

function btnPress(){
    // console.log(this);
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
// this is for reset the LeveL
function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    LeveL = 0;
}