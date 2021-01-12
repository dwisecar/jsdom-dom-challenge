let counter = document.getElementById("counter");
let minusButton = document.getElementById("minus");
let plusButton = document.getElementById("plus");
let heartButton = document.getElementById("heart");
let pauseButton = document.getElementById("pause");
let counterPaused = false;
let likeCount = 0;

document.addEventListener("DOMContentLoaded", function() {
    setInterval(incrementCounter, 10000);
})

function incrementCounter() {
    if(counterPaused == false) {
        counter.textContent++; 
    }
}

pauseButton.addEventListener("click", function(){
    if (counterPaused == false) {
        counterPaused = true;
        console.log(counterPaused);
        pauseButton.innerHTML = "resume";
        heartButton.disabled = true;
        minusButton.disabled = true;
        plusButton.disabled = true;
    } else if (counterPaused == true) {
        counterPaused = false;
        pauseButton.innerHTML = "pause";
        heartButton.disabled = false;
        minusButton.disabled = false;
        plusButton.disabled = false;
    }
})

minusButton.addEventListener("click", function() {
    counter.textContent--;
})

plusButton.addEventListener("click", function() {
    counter.textContent++;
})

function addLike() {
    let currentNum = counter.textContent;
    let currentNumLikes = {}
    let likeUl = document.getElementsByClassName("likes")[0];
    let likesList = likeUl.getElementsByTagName("li");

    if (currentNumLikes.currentNum === undefined) {
        currentNumLikes.currentNum = 1;
    } else {
        currentNumLikes.currentNum += 1;
    }
    console.log(currentNum);
}

heartButton.addEventListener("click", function() {
    likeCount += 1;
    addLike();
})

