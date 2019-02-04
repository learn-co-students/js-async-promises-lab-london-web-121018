const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question

const appendQuestion = (question) => {
   let container = document.querySelector('.question-container')
   container.innerText = `${question.questionText}`
}

let promise = new Promise(function(resolve, reject){

})

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

 const removeQuestion = () => {
   let container = document.querySelector('.question-container')
   container.innerText = ''
 }

const askQuestionThenRemoveQuestion = () => {
  return askQuestionThen().then(removeQuestion)
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






//  function doSlowMath(num1, num2){
//   return new Promise((resolve, reject) => {
//     setTimeout(function(){
//       let value = num1 * num2
//       resolve(value)
//     }, 2000 )
//   })
// }
