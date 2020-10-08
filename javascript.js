const startButton = document.getElementById("startButton");
var myQuestions = document.querySelector("myQuestions")

function checkAnswer(){
//index var 
}
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");
var timerButton = document.querySelector("timer");

// four loop
function showResults() {
  for (var i = 0; i < myQuestions.length; i++) {
    var reponse = window.prompt(myQuestions[i].prompt);
    if (response == questions[i].answers) {
      score++;
      alert("Correct");
    } else {
      alert("Wrong");
    }
  }
  alert("You got" + score + "/" + questions.length);
  const answersContainers = quizContainer.querySelectorAll("answers");
  let numCorrect = 0;
  myQuestions.forEach((currentQuestion, questionNumber));
}

// display quiz right away
// function buildQuiz() {
//   const output = [];
  //   myQuestions.forEach (currentQuestion, questionNumber){
  //     answers.push()
  //  // }
// }

// on submit, show results
startButton.addEventListener("click", showResults);
var choice1= document.querySelector ("#question1")
choice1.addEventListener("click", checkAnswer)
const myQuestions = [
  {
    question: "Who invented JavaScript?",
    answers: {
      a: "Mark Zuckerburg",
      b: "Sheryl Sandberg",
      c: "Brendan Eich",
      d: "Steve Jobs",
    },
    correctAnswer: "c",
  },
  {
    question: "What year was JavaScript founded?",
    answers: {
      a: "2000",
      b: "2002",
      c: "1998",
      d: "1995",
    },
    correctAnswer: "d",
  },
  {
    question: "Arrays in javascript are used to store?",
    answers: {
      a: "other arrays",
      b: "bookmarks",
      c: "numbers and strings",
      d: "all the above",
    },
    correctAnswer: "d",
  },
  {
    question: "Curley brackets are used for what?",
    answers: {
      a: "to make an equations",
      b: "to define start and end of functions",
      c: "for arrays",
      d: "to make alerts",
    },
    correctAnswer: "b",
  },
];



var score = 0;
// functions showResults(myQuestions, quizContainer)
var sec = 60;
if myQuestions = false;
else sec = sec-5
//timer
function timer() {
 
  var timer = setInterval(function () {
    document.getElementById("timerDisplay").timer = "00" + sec;
    if (sec < 0) {
      alert("time has run up.");
    }
  }, 1000);
}
 timerButton.addEventListener("click", startTimer);
