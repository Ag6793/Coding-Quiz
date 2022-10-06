//Variables for content
const start = document.createElement("button");
const submit = document.createElement("button");
const backBtn= document.createElement("button");
const clrScore = document.createElement("button");

var questionEl = document.createElement("p");//QuestionEl holds questions
// questionEl.textContent = userQuestions;

var questionBox = document.createElement("div");//Question Box holds questions & answers

// questionBox.textContent = questionEl;

var answerBox = document.createElement("ul");//Holds unordered list of answers



//Questions index
var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        answers: ["strings", "booleans", "alerts", "numbers"],
        correct: "alerts"
    },
    {
        question: "The condition in an if / else statement is enclosed within __________.",
        answers: ["quotes", "curly brackets", "parentheses", "square brackets"],
        correct: "parentheses"
    },
    {
        question: "Arrays in JavaScript can be used to store __________.",
        answers: ["numbers and strings", "other arrays", "booleans","all of the above"],
        correct: "all of the above",
    },
    {
        question: "String values must be enclosed within ______ when being assigned to variables.",
        answers: ["commas", "curly brackets", "quotes", "parentheses"],
        correct: "quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        correct: "console.log"
    }

];

//======================================================================================================================================================


// french.setAttribute("class", "page2btn"); -----assigns class to the element-------------------------------------

//Submit button
submit.innerHTML = "Submit";
document.body.appendChild(submit);
submit.setAttribute("class", "button");

//Back Button
backBtn.innerHTML = "Go Back";
document.body.appendChild(backBtn);
backBtn.setAttribute("class", "button");

//Clear Highscore Button
clrScore.innerHTML = "Clear Highscores";
document.body.appendChild(clrScore);
clrScore.setAttribute("class", "button");

//========================================================================================================================================================

//Homepage
const homePagediv = document.createElement("div");

// homePagediv.style.display = 'visible';
const header = document.createElement("h1");
header.textContent = "Coding Quiz Challenge";

const goal = document.createElement("p");
goal.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";

document.body.appendChild(homePagediv);
homePagediv.appendChild(header);
homePagediv.appendChild(goal);

//Start button
start.innerHTML = "Start Quiz";
document.body.appendChild(start);
start.setAttribute("class", "button");


//=======================================================================================================================================================

function startQuiz () {
    questionEl.innerHTML ="";
    answerBox.innerHTML = "";
    homePagediv.style.display = "none"; //When quiz starts, the home page is hidden

    // For loop to display questions
    var questionIndex = 0;
    questionBox.setAttribute("class", "questionContainer");//Question box contains questions & answers
    questionBox.style.display = "block";

    //Accesses question array
    // var userQuestions = document.createElement("p")

    // //Accesses answers array
    // var userAnswers = document.createElement("li");//answers to be held in an unordered list
   
    // //Appends user questions & answers to question container div
    // questionContainer.appendChild(questionEl);
    // questionContainer.appendChild(userAnswers);
    // document.body.appendChild(questionContainer);


    for (let i = 0; i < questions.length; i++) {
        let userQuestions = questions[questionIndex].question; b//userQuestions contain question array
        let userAnswers = questions[questionIndex].answers;//userAnswers contain answers array
        questionEl.innerHTML = userQuestion;
    }
    userAnswers.forEach(function(nextQuestion) {//Use for each to make answers array separate into individual string
        let listItem =  document.createElement("li");
        listItem.textContent = nextQuestion;
        answerBox.appendChild(listItem);
        listItem.addEventListener("click", displayNexQuestion);
       
    });
    
}

//When the player clicks start quiz the quiz starts
start.addEventListener("click", startQuiz); //Event Listener to start quiz

//Once the player answers the last question the quiz is over
function checkQuizOver() {
    if(questionIndex === question.length -1) {
        endQuiz()
    } else {
        displayNextQuestion()
    }
};



//=============================================================================================================================================================================================

//Timer
const timerdiv = document.createElement("div"); //Creates timer div
const timerp = document.createElement("p"); //Creates a "p" tag that holds 
var timeLeft = 75;//Countdown starts at 75 seconds
timerp.setAttribute("id", "timer");//Assigns ID "timer" to timerp

timerp.textContent = "Time: " + timeLeft + " sec";
document.body.appendChild(timerdiv);
timerdiv.appendChild(timerp);

var startCountdown = document.querySelector("#timer");//Variable for start timer to be used, ID timer

//Function will countdown from 75s when the player clicks the start quiz button
// function timerClickHandler() {

// }

// var timerEl = "";
// function countdown() {

//     var timeInterval = setInterval(function() {
//         if (timeLeft > 0){
//             timerEl.textContent = "Time: " + timeLeft;
//             timeLeft--;
//         } else if (timeLeft === 0){
//             timerEl.textContent = "Game Over!"
//         } else {
//             timerEl.textContent = "";
//             clearInterval(timeInterval);
//             // var displayMessage = "Game Over!";
//         }
//         console.log(timeLeft);   
//     }, 1000);
   
    
// }

// countdown();

// themeSwitcher.addEventListener("click", function() {
//     // If mode is dark, apply light background
//     if (mode === "dark") {
//       mode = "light";
//       container.setAttribute("class", "light");
//     }
//     // If mode is light, apply dark background 
//     else {
//       mode = "dark";
//       container.setAttribute("class", "dark");
//     }
//   });
  

//=======================================================================================================================================================