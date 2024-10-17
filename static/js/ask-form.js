async function fetchQuestionFormHtml() {
  try {
    const response = await fetch(`${window.origin}/api/question_form_html/`);
    const data = await response.json();

    const form_html = data;
    console.log(data)
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


    document.querySelector("#ask-form").innerHTML = askForm;