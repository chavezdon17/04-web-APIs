const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
var timerButton = document.querySelector('timer ')
  function buildQuiz(){}

function showResults(){}

// display quiz right away
buildQuiz();

// on submit, show results
startButton.addEventListener('click', showResults)
const myQuestions = [
    {
      question: "Who invented JavaScript?",
      answers: {
        a: "Mark Zuckerburg",
        b: "Sheryl Sandberg",
        c: "Brendan Eich",
        d: "Steve Jobs",
      },
      correctAnswer: "c"
    },
    {
      question: "What year was JavaScript founded?",
      answers: {
        a: "2000",
        b: "2002",
        c: "1998",
        d: "1995"
      },
      correctAnswer: "d"
    },
    {
      question: "Arrays in javascript are used to store?",
      answers: {
        a: "other arrays",
        b: "bookmarks",
        c: "numbers and strings",
        d: "all the above",
      },
      correctAnswer: "d"
    },
    {
      question: "Curley brackets are used for what?",
      answers: {
        a: "to make an equations",
        b: "to define start and end of functions",
        c: "for arrays",
        d: "to make alerts",
      },
      correctAnswer: "b"
    },
functions ,showResults(myQuestions, quizContainer)

var output []
var answers;

//timer 
function timer(){
  var sec = 60;
  var timer = setInterval(function(){
      document.getElementById('timerDisplay').timer='00'+sec;
      if (sec < 0) {
         alert("time has run up.");
      }
  }, 1000);
}
timerButton.addEventListener("click", startTimer);