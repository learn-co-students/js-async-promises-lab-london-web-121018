const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;
const questionBox = document.querySelector('.question-container');

const appendQuestion = (question) => {
  questionBox.innerText = question.questionText;
};

const askQuestionThen = (time) => {
  question = questions[0];

  appendQuestion(question);
  return new Promise((resolve) => {
    setTimeout(time)
  });

};

const removeQuestion = () => {
  questionBox.innerText = '';

  return new Promise((resolve, reject) => {
  });
};

const askQuestionThenRemoveQuestion = (time) => {
  return askQuestionThen(time).then(removeQuestion)
};

const trueAndFalseButtons = () => {
  return [...document.querySelectorAll('.btn.center-align')]
};

const toggleTrueAndFalseButtons = () => {
  trueAndFalseButtons().forEach((button) => button.classList.toggle(`hide`))
};

const displayQuestionOnClick = () => {
  let time = 5000;

  document.addEventListener('click', askQuestionThenRemoveQuestion(time))

};