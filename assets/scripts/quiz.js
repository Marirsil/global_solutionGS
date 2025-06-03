const questions = [
  {
    question: "O que você deve fazer ao perceber que uma enchente está se formando?",
    answers: [
      { id: 1, text: "Ficar em casa e esperar passar", correct: false },
      { id: 2, text: "Buscar abrigo em áreas mais altas", correct: true },
      { id: 3, text: "Descer para o porão", correct: false },
      { id: 4, text: "Tentar atravessar a enchente a pé", correct: false }
    ]
  },
  {
    question: "Qual a atitude correta ao encontrar água acumulada na rua?",
    answers: [
      { id: 1, text: "Atravessar rapidamente", correct: false },
      { id: 2, text: "Dirigir devagar por dentro da água", correct: false },
      { id: 3, text: "Evitar contato e buscar rotas alternativas", correct: true },
      { id: 4, text: "Pisar devagar para testar a profundidade", correct: false }
    ]
  },
  {
    question: "O que deve ser feito com os aparelhos eletrônicos antes de sair de casa em uma enchente?",
    answers: [
      { id: 1, text: "Deixá-los ligados para monitorar a situação", correct: false },
      { id: 2, text: "Desconectar da tomada e colocá-los em locais altos", correct: true },
      { id: 3, text: "Colocá-los no chão para protegê-los da chuva", correct: false },
      { id: 4, text: "Levá-los consigo mesmo com risco de molhar", correct: false }
    ]
  },
  {
    question: "Por que não se deve andar em ruas alagadas?",
    answers: [
      { id: 1, text: "Pode molhar o calçado", correct: false },
      { id: 2, text: "Águas de enchente podem conter doenças e esconder buracos", correct: true },
      { id: 3, text: "Apenas por questão estética", correct: false },
      { id: 4, text: "Para não assustar os vizinhos", correct: false }
    ]
  },
  {
    question: "O que fazer se a água da enchente começar a entrar na sua casa?",
    answers: [
      { id: 1, text: "Aumentar o som para avisar os vizinhos", correct: false },
      { id: 2, text: "Subir móveis e desligar a energia elétrica", correct: true },
      { id: 3, text: "Fechar as portas e janelas para manter a água fora", correct: false },
      { id: 4, text: "Esperar até que ela suba para evacuar", correct: false }
    ]
  },
  {
    question: "O que é importante levar ao sair de casa por risco de enchente?",
    answers: [
      { id: 1, text: "Somente o celular", correct: false },
      { id: 2, text: "Documentos, remédios e itens de emergência", correct: true },
      { id: 3, text: "Aparelhos eletrônicos e livros", correct: false },
      { id: 4, text: "Nada, apenas sair rápido", correct: false }
    ]
  },
  {
    question: "Ao retornar para casa após uma enchente, o que se deve fazer primeiro?",
    answers: [
      { id: 1, text: "Ligar a energia e verificar se tudo funciona", correct: false },
      { id: 2, text: "Fazer uma limpeza rápida e voltar a morar", correct: false },
      { id: 3, text: "Verificar a estrutura e se há riscos antes de entrar", correct: true },
      { id: 4, text: "Lavar o chão apenas com água", correct: false }
    ]
  },
  {
    question: "Qual a atitude correta em relação a lixo e esgoto em áreas alagadas?",
    answers: [
      { id: 1, text: "Ignorar, pois a água leva embora", correct: false },
      { id: 2, text: "Evitar contato, pois pode haver contaminação", correct: true },
      { id: 3, text: "Utilizar a água da enchente para limpeza", correct: false },
      { id: 4, text: "Ajudar a espalhar para secar mais rápido", correct: false }
    ]
  },
  {
    question: "Por que é importante acompanhar alertas da Defesa Civil?",
    answers: [
      { id: 1, text: "Para saber se haverá feriado", correct: false },
      { id: 2, text: "Porque eles indicam o risco real de enchentes", correct: true },
      { id: 3, text: "Para saber se deve ligar para os vizinhos", correct: false },
      { id: 4, text: "Apenas por curiosidade", correct: false }
    ]
  },
  {
    question: "O que fazer com alimentos que tiveram contato com a água da enchente?",
    answers: [
      { id: 1, text: "Lavar e consumir normalmente", correct: false },
      { id: 2, text: "Doar para instituições", correct: false },
      { id: 3, text: "Descartar, pois podem estar contaminados", correct: true },
      { id: 4, text: "Secar ao sol e guardar", correct: false }
    ]
  }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Próxima";
  showQuestion();
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.dataset.id = answer.id;
    button.classList.add("btn");
    button.addEventListener("click", selectAnswer);
    answerButton.appendChild(button);
  });

  updateProgressBar(); 
}

function selectAnswer(e) {
  const answers = questions[currentQuestionIndex].answers;
  const correctAnswer = answers.find((answer) => answer.correct);

  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.id == correctAnswer.id;
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }

  Array.from(answerButton.children).forEach((button) => {
    button.disabled = true;
  });

  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `Você acertou ${score} de ${questions.length}`;
  nextButton.innerHTML = "Reiniciar";
  nextButton.style.display = "block";

  updateProgressBar(); 
  document.getElementById("progress-text").style.display = "none";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

function updateProgressBar() {
  if (currentQuestionIndex === questions.length) {
    progressBar.style.width = "100%";
    progressText.textContent = `Questão ${questions.length} de ${questions.length}`;
  } else {
    const progressPercent = (currentQuestionIndex / questions.length) * 100;
    progressBar.style.width = `${progressPercent}%`;
    progressText.textContent = `Questão ${currentQuestionIndex + 1} de ${questions.length}`;
  }
}

startQuiz();
