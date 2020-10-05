const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');

  function buildQuiz(){}

function showResults(){}

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults)
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
    },]
functions showResults(myQuestions, quizContainer)

var output []
var answers;

//timer 
function timer(){
  var sec = 60;
  var timer = setInterval(function(){
      document.getElementById('timerDisplay').timer='00'+sec;
      if (sec < 0) {
          clearInterval(timer);
      }
  }, 1000);
}