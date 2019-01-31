const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;
let text;

const button = document.querySelector('.waves-effect.waves-light.btn');
const qContainer = document.querySelector('.question-container');
const bContainer = document.querySelector('.true-false-list');

// // Create a question element
//
// const createQuestion = (text) => {
//   const el = document.createElement('p');
//   el.innerText = text;
//   qContainer.appendChild(el);
// }
//
// // Select a question from an array of questions and create
//
// const addQuestion = (questions) => {
//   if(question < questions.length) {
//     text = questions[question].questionText;
//     question += 1;
//   } else {
//     question = 0;
//     text = questions[question].questionText;
//     question += 1;
//   }
//   createQuestion(text);
// }

// // Append question to the broweser
//
// button.addEventListener('click', event => {
  //   event.preventDefault();
  //   addQuestion(questions);
  // })

function appendQuestion(question){
  qContainer.innerHTML = question.questionText;
}

// Assigns global variable question and returns a promise
function askQuestionThen(time) {
  question = questions[0];
  appendQuestion(question);
  return new Promise( (resolve, reject) => {
    setTimeout(function(){
      resolve(question)
    }, time)
  })
}

// Remove question from container
const removeQuestion = () => {
  return new Promise( (resolve, reject) => qContainer.innerHTML = "" )
}

// Ask and then remove the Question

const askQuestionThenRemoveQuestion = time => askQuestionThen(time).then(removeQuestion)

// display true and false buttons
const trueAndFalseButtons = () => [ bContainer.children[0], bContainer.children[1] ]

// Function that determines if node has hide class and toggles it

// Performs the above function  on each element in array
function toggleTrueAndFalseButtons() {
  trueAndFalseButtons().forEach( el => {
    if(el.classList.contains('hide')) {
      el.classList.remove("hide")
    } else {
      el.classList.add("hide")
    }
  })
}

const displayQuestionOnClick = () => {
  button.addEventListener('click', event => {
      event.preventDefault();
      toggleTrueAndFalseButtons();
      askQuestionThenRemoveQuestion(5000);
    })
}
