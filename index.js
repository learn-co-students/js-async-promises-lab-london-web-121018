const questions = [
  {
    questionText: 'Lightning never strikes in the same place twice',
    answer: false
  },
  {
    questionText:
      'Humans can distinguish between over one trillion different smells',
    answer: true
  },
  {
    questionText: 'Goldfish only have a memory of about three seconds',
    answer: false
  }
]

let question

function appendQuestion (question) {
  let qContainer = document.querySelector('.question-container')
  qContainer.innerText = question.questionText
}

function askQuestionThen (time) {
  question = questions[0]
  let promise = new Promise(() => {
    setTimeout(function () {
      return question
    }, time)
  })

  return promise
}

function removeQuestion (question) {
  let qContainer = document.querySelector('.question-container')
  qContainer.innerText = ''
  // still need to return a Promise !!!!
  return new Promise(() => {return question})
  
}

// currently not passing !
function askQuestionThenRemoveQuestion (time) {
  appendQuestion(question)
  return askQuestionThen(1000).then(removeQuestion)
}

function trueAndFalseButtons() {
  return document.querySelectorAll('.lighten-2')
}

function toggleTrueAndFalseButtons () {
  trueAndFalseButtons().forEach(btn => {
    btn.classList.toggle('hide')
  })
}


function displayQuestionOnClick() {
  trueAndFalseButtons() 

}
