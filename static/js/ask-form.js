// Получение HTML-кода формы
async function fetchQuestionFormHtml() {
  try {
    const response = await fetch(`${window.origin}/api/get_question_form_html/`);
    const data = await response.json();

    const form_html = data;
    return form_html;
  }
  catch (error) {
    console.error('Ошибка при загрузке данных:', error);
  }
}
const form_html = await fetchQuestionFormHtml();
var askForm =  `    <section class="section section--questions">
      <div class="questions container">
        <h2 class="questions__title">Остались вопросы?</h2>
        <p class="questions__description">
          Задайте вопрос и мы обязательно вам ответим
        </p>
        ${form_html}
      </div>
    </section>`

// Маска для номера телефона
document.querySelector("#ask-form").innerHTML = askForm;
var phoneInput = document.getElementById('questionForm').querySelector('#id_phone');
var phoneMask = IMask(phoneInput, {
  mask: '+{7} (000) 000 00 00' 
});
// Валидация номера телефона
function validatePhoneNumber() {
  const digitsOnly = phoneInput.value.replace(/\D/g, '');

  if (digitsOnly.length < 11) {
    phoneInput.setCustomValidity("Необходимо минимум 11 цифр");
    return false;
  } else {
    phoneInput.setCustomValidity("");
    return true;
  }
}
phoneInput.addEventListener("input", function () {
  validatePhoneNumber();
});

// Работа с Bootstrap Toast
const toastHtml = `
  <div class="toast-container position-fixed bottom-0 end-0 p-3">
  <div id="toastQuestionSent" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <img src="${window.origin}/static/images/favicon-16x16.png" class="rounded me-2" alt="...">
      <strong class="me-auto">Форма была отправлена!</strong>
      <small>только что</small>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
      Ваш вопрос будет рассмотрен в ближайшее время
    </div>
  </div>
</div>
`;
function showToast() {
  document.body.insertAdjacentHTML('beforeend', toastHtml);

  const toastElement = document.getElementById('toastQuestionSent');
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastElement);
  toastBootstrap.show();

  toastElement.addEventListener('hidden.bs.toast', () => {
    toastElement.remove();
  });
}

// Обработка отправки формы
const form = document.querySelector('#questionForm');
form.addEventListener('submit', async function (event) {
  event.preventDefault();

  const formData = new FormData(form);
  const csrfToken = document.querySelector('input[name="csrfmiddlewaretoken"]').value;

  form.reset();
  showToast();

  try {
    const response = await fetch(`${window.origin}/api/save_question/`, {
      method: 'POST',
      body: formData,
      headers: {
        'X-CSRFToken': csrfToken, 
      }
    });

    if (!response.status === 200) {
      alert('Ошибка при отправке формы. Попробуйте снова.');
    }
  } catch (error) {
    console.error('Ошибка запроса:', error);
  }
});