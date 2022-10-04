//Variables for content
const start = document.createElement("button");
const submit = document.createElement("button");
const backBtn= document.createElement("button");
const clrScore = document.createElement("button");

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

// For loop to display questions
var questionIndex = 0;

function startQuiz(){
    questionEl.innerHTML = "";
    answerBox.innerHTML = "";
    homepage.style.display = "none"; //When quiz starts, the home page is hidden
    questionBox.style.display = "block";//when quiz starts the default is the questions are hidden
    for (let i = 0; i < questions.length; i++) {
        let userQuestions = questions[questionIndex].question;//question display
        var userAnswers = questions[questionIndex].answers;//answers display
    }
    userAnswers.forEach(function(nextQuestion) {
        let listItem = document.createElement("li");
        answerBox.appendChild(listItem);
        listItem.addEventListener("click", displayNextQuestion);
    })
};

//function to display next question
// function displayNextQuestion(event){
//     let element = event.target;
//     if(element.matches("li")) {
//         var compareDiv = document.createElement("div")
//         compareDiv.id = "createDiv";
//         if (element.textContent == questions[questionIndex].correct) {
//             // Score needs to go up
//             compareDiv.textContent = "Correct!"
//         } else {
//             compareDiv.textContent = "Wrong!"
//         }
//     }
//     questionIndex++
//     if (questionIndex >= questions.length) {
//         questionBox.style.display = "none";
//     } else {
//         startquiz(questionIndex)
//     }
//     questionEl.appendChild(compareDiv)
// };
