const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;

let q = document.createElement("div");
let card = document.querySelector('.section.question-container.center-align');
let cardContainer = document.querySelector('.question-container');
let askButton = document.querySelector('a.start');

function appendQuestion (obj) {
  card.innerText = obj.questionText; 
  return obj;
}

function  askQuestionThen (time) {
  question = appendQuestion(questions[0]);
 return  new Promise(function(resolve, reject){ 
  setTimeout(function(){
      resolve(question)
    }, time)

})
}

function removeQuestion() {
  cardContainer.innerHTML = card.innerText;
  card.innerHTML = "";
}

function askQuestionThenRemoveQuestion(time) {
   return askQuestionThen(time).then(removeQuestion);
}

function trueAndFalseButtons(){
  return document.querySelectorAll('.true-false-list div');
}

function toggleTrueAndFalseButtons() {
     trueAndFalseButtons().forEach(function(b) {
      b.classList.toggle('hide');
    })
}

function displayQuestionOnClick() {
  toggleTrueAndFalseButtons();
  askQuestionThenRemoveQuestion(5000);
}

askButton.addEventListener('click', displayQuestionOnClick);
