const counter = document.getElementById("counter");
const minusButton = document.getElementById("minus");
const plusButton = document.getElementById("plus");
const heartButton = document.getElementById("heart");
const pauseButton = document.getElementById("pause");
const commentsList = document.getElementsByClassName("comments")[0];
const submit = document.getElementById("submit")
let counterPaused = false;


document.addEventListener("DOMContentLoaded", function() {
    setInterval(incrementCounter, 1000);
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

let likes = {}

function addLike() {
    const currentNum = parseInt(counter.textContent);
    const likeUl = document.getElementsByClassName("likes")[0];

    if (likes[currentNum] === undefined) {
        likes[currentNum] = 1;
        const li = document.createElement("li");
        li.setAttribute("id", `${currentNum}-counter`)
        likeUl.appendChild(li);
        li.innerHTML = `${currentNum} has ${likes[currentNum]} likes.`
    } else {
        likes[currentNum] += 1;
        const existingLi = document.getElementById(`${currentNum}-counter`);
        existingLi.innerHTML = `${currentNum} has ${likes[currentNum]} likes.`
    }
}

heartButton.addEventListener("click", function() {
    addLike();
})

submit.addEventListener("click", function(event) {
    event.preventDefault();
    addComment();
})

function addComment() {
    let comment = document.getElementById("comment-input").value;
    let commentElement = document.createElement("p");
    commentsList.appendChild(commentElement);
    commentElement.textContent = comment;
}

