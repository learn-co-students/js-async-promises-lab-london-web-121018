const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;
const questionContainer = document.querySelector('.question-container')
let promise = new Promise(function(resolve, reject){

})
const askAway = document.querySelector('#ask')
const buttons = document.querySelectorAll('.hide')
// const hiddenBs = document.querySelectorAll('.hide')
function appendQuestion(question){
  questionContainer.innerText = question.questionText
}

function askQuestionThen(time){
  return new Promise((resolve) => {
    question = questions[0]
    appendQuestion(question)
    setTimeout(function(){
      resolve(question)
    }, time)
  })
}

function removeQuestion(){
  return new Promise((resolve, reject) => {
    questionContainer.innerHTML =""
  })
}

function askQuestionThenRemoveQuestion(time){
  return askQuestionThen(time).then(removeQuestion)
}
//
function trueAndFalseButtons(){
  return buttons
}

function toggleTrueAndFalseButtons(){
  if (buttons[0].classList.length === 5) {
  buttons.forEach(button => button.classList.remove("hide"))
  } else {
  buttons.forEach(button => button.classList.add("hide"))
  }
}

function displayQuestionOnClick(){
askAway.addEventListener('submit', (event) => {
	event.preventDefault().promise(appendQuestion())
  })
}
