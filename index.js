const questions = [
  { questionText: "Lightning never strikes in the same place twice", answer: false },
  { questionText: "Humans can distinguish between over one trillion different smells", answer: true },
  { questionText: "Goldfish only have a memory of about three seconds", answer: false }
]

let question;
function appendQuestion(question) {

  questionBody = document.querySelector('.question-container')

  questionBody.innerHTML = `${question.questionText}`

}
function askQuestionThen(time) {
  question = questions[0]
  appendQuestion(question)
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(question)
    }, time)
  })
}


function trueAndFalseButtons() {
  return btns = document.querySelector('.true-false-list').querySelectorAll('.btn')
}

function toggleTrueAndFalseButtons() {
  trueAndFalseButtons().forEach(button => button.classList.toggle("hide"))
}

function displayQuestionOnClick() {
  askButton = document.querySelector('a')
  askButton.addEventListener('click', () => toggleTrueAndFalseButtons())
  askQuestionThenRemoveQuestion(5000)
}

function removeQuestion() {
  return new Promise(function () {

    letquestionBody = document.querySelector('.question-container');
    questionBody.innerHTML = '';
    toggleTrueAndFalseButtons();
  })
}

function askQuestionThenRemoveQuestion(time) {
  return askQuestionThen(time).then(removeQuestion)
}
