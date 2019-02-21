const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;

function appendQuestion(question) {
  document.querySelector('.question-container').innerHTML = question.questionText;
};

function askQuestion(){
  return questions[0];
};

function askQuestionThen(time) {
  question = askQuestion();
  appendQuestion(question);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(question)
    }, time);
  });
};

function removeQuestion(question) {
  return new Promise(() => {
    document.querySelector('.question-container').innerHTML = '';
  });
};

function askQuestionThenRemoveQuestion(time) {
  return askQuestionThen(time).then(removeQuestion);
};

function trueAndFalseButtons() {
  const container = document.querySelector('.true-false-list');
  return container.querySelectorAll('.btn');
};

function toggleTrueAndFalseButtons() {
  btns = trueAndFalseButtons();
  for(let btn of btns){
    btn.classList.toggle('hide');
  };
};



function displayQuestionOnClick() {
  const button = document.querySelector('a');
  return button.addEventListener('click', () => {
    toggleTrueAndFalseButtons();
    askQuestionThenRemoveQuestion(10000);
  });
};
