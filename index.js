const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;

let appendQuestion = (question) =>{
  let containerQ = document.querySelector('.question-container');
  // let newQ = document.createElement('p').innerText = question;
  containerQ.innerHTML = question.questionText;
}

let askQuestionThen = () => {
  return new Promise((res,rej) => {
    question = questions[0];
    appendQuestion(question);
    toggleTrueAndFalseButtons();
    setTimeout(() => {
      res(question)
    },5000)
  })
}

let removeQuestion = () => {
  document.querySelector('.question-container').innerHTML = '';
}

let askQuestionThenRemoveQuestion = () => {
  return askQuestionThen()
  .then(removeQuestion);
}

let trueAndFalseButtons = () => 
  document.querySelectorAll('div.btn')

let toggleTrueAndFalseButtons = () =>{
  let buttons = [...trueAndFalseButtons()]
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.toggle('hide');
    
  }
}

let displayQuestionOnClick = () => {
  document.body.addEventListener('click', (eve) =>{
    // console.log(eve)
    let trigger = eve.target

    if (trigger.classList.contains('btn')) {
      askQuestionThenRemoveQuestion()
    }
  })
}
