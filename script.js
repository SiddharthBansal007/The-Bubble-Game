var timer = 6;
var score = 0;
var hitrn = 0;


var start_game = document.querySelector("#start");
document.querySelector("#pbottom").innerHTML = `<h1>Press Start to Play</h1>`;

// 
start_game.addEventListener("click",function(){
    runTimer();
    makeBubble();
    getNewHit();
    document.querySelector("#scorevalue").textContent = 0;
})

var reset_game = document.querySelector("#reset");

reset_game.addEventListener("click",function(){
    runTimer();
    makeBubble();
    getNewHit();
    document.querySelector("#scorevalue").textContent = 0;
})

//function to increase the score
function increaseScore(){
    score += 10;
    document.querySelector("#scorevalue").textContent = score;
}


// function to generate every
function getNewHit(){
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitvalue").textContent = hitrn;
}

// function to generate bubbles
function makeBubble() {
    var clutter = "";

    for(var i = 1; i <= 252; i++){
        var rn = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector("#pbottom").innerHTML = clutter;
}

// function to start the 60-secs timer
function runTimer(){
    timer = 6;
    var timer1 = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timervalue").textContent = timer;
        }
        else{
            clearInterval(timer1);
            document.querySelector("#pbottom").innerHTML = `<h1>Game Over</h1>`;
        }
    }, 1000);
}

// check if selected bubble value is equal to the hit value
document.querySelector("#pbottom").addEventListener("click", function(details){
    var clickedNum = Number(details.target.textContent);
    if(clickedNum === hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
})
