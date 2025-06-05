const nameInput = document.getElementById('nome');
const idadeInput = document.getElementById('idade');
const cepInput = document.getElementById('cep');
const emailInput = document.getElementById('email');

const Message = document.querySelector('.msg');
const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', (event) => {
  event.preventDefault();

  const nameValue = nameInput.value.trim();
  const idadeValue = idadeInput.value.trim();
  const cepValue = cepInput.value.trim();
  const emailValue = emailInput.value.trim();

  if (nameValue === "" || idadeValue === "" || cepValue === "" || emailValue === "") {
    Message.textContent = 'Por favor, preencha todos os campos.';
    Message.classList.add('error');
    return;
  }

  if (isNaN(idadeValue) || Number(idadeValue) <= 0) {
    Message.textContent = 'Idade inválida. Por favor, insira uma idade válida.';
    Message.classList.add('error');
    return;
  }

  if (!/^\d{5}-\d{3}$/.test(cepValue)) {
    Message.textContent = 'CEP inválido. Formato esperado: XXXXX-XXX';
    Message.classList.add('error');
    return;
  }

  if (!emailValue.includes('@')) {
    Message.textContent = 'Email inválido. Por favor, insira um email válido.';
    Message.classList.add('error');
    return;
  }

  Message.textContent = 'Formulário enviado com sucesso!';
  Message.classList.remove('error');
});
