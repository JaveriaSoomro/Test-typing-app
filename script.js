const randomWord = document.getElementById("random-word");
const UserInput = document.getElementById("input");
const check = document.getElementById("check");
const container2 = document.getElementById("container2");
const container = document.getElementById("container");
let refresh = document.getElementById("refresh");
let hint = document.getElementById("hint");
let time = document.getElementById("time");
let jumble,
word,
random,
timeCount;
function gettingRandomNumber(){
    random = Math.floor(Math.random() * wordList.length);
    word = wordList[random].word.split("");

//    Jumbling the words 
   for (let i = word.length - 1; i > 0; i--) {
   let j = Math.floor(Math.random() * (i+1))
  jumble =   [word[i] , word[j]] = [word[j] , word[i]];  
}
randomWord.innerHTML = " ";
  randomWord.innerHTML = `<span>${word.join("")}</span>`; 
  if(randomWord.innerHTML == wordList[random].value) {
    gettingRandomNumber();
  }              
}

// Hint
function gettingHint(){
    let wordHint = wordList[random].hint;
    hint.innerHTML = `<span>Hint : ${wordList[random].hint}</span>`;
}

// Clicking Check input
check.addEventListener("click" ,checkInput);
check.addEventListener("click" ,() =>{
    UserInput.value = "";
    container.style.display = "none";
    container2.style.display = "flex";
});

// Checking Input Of user
function checkInput(){
    let input = UserInput.value;
     let inputLowerCase = input.toLowerCase();
     let wordLowerCase = wordList[random].word.toLowerCase();
        inputLowerCase === wordLowerCase ? correct() : incorrect() ;
}
function correct(){
   container2.innerHTML = "";
   container2.innerHTML += `<i class="fa-regular fa-circle-check fa-2xl"></i>
                         <p>Congratulations! Your Answer is Correct!!</p>
                         <button class="buttons" onclick="playAgain()">Play Again!!</button>`;

}

function incorrect(){
   container2.innerHTML = "";
   container2.innerHTML += `<i class="fa-regular fa-circle-xmark fa-2xl"></i>
                         <p>Oops! Your Answer is Inorrect!!</p>
                         <p>Correct Answer is ${wordList[random].word}!!</p>
                         <button class="buttons" onclick="playAgain()">Play Again!!</button>`;
}


setInterval(timer, 1000);

// function of timer
timeCount = 15;
function timer(){
    let html = "";
     html += `<p>Time Left :</p><span>${timeCount} Seconds</span>`;
     time.innerHTML = "";
     time.innerHTML = html;
    timeCount--;
    if(timeCount < 0 ){
        time.innerHTML = "";
        time.innerHTML +=  `<p>Time Left :</p><span> 00 Seconds</span>`;
        UserInput.style.pointerEvents = "none";
        container.style.display = "none";
        container2.style.display = "flex";
        container2.innerHTML = "";
        container2.innerHTML += `<i class="fa-regular fa-circle-xmark fa-2xl"></i>
                              <p>Oops! Time's Up</p>
                              <p>Correct Answer is ${wordList[random].word}!!</p>
                              <button class="buttons" onclick="playAgain()">Play Again!!</button>`;
    }
}

gettingRandomNumber();
gettingHint();
checkInput();

// Refreshing Word
refresh.addEventListener("click", () =>{
    gettingRandomNumber();
})

// Play Again
function playAgain(){
    window.location.reload();
}
