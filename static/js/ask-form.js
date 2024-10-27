async function fetchQuestionFormHtml(){try{let t=await fetch(`${window.origin}/api/get_question_form_html/`),e=await t.json();return e}catch(o){console.error("Ошибка при загрузке данных:",o)}}const form_html=await fetchQuestionFormHtml();var askForm=`    <section class="section section--questions">
      <div class="questions container">
        <h2 class="questions__title">Остались вопросы?</h2>
        <p class="questions__description">
          Задайте вопрос и мы обязательно вам ответим
        </p>
        ${form_html}
      </div>
    </section>`;document.querySelector("#ask-form").innerHTML=askForm;var phoneInput=document.getElementById("questionForm").querySelector("#id_phone"),phoneMask=IMask(phoneInput,{mask:"+{7} (000) 000 00 00"});function validatePhoneNumber(){let t=phoneInput.value.replace(/\D/g,"");return t.length<11?(phoneInput.setCustomValidity("Необходимо минимум 11 цифр"),!1):(phoneInput.setCustomValidity(""),!0)}phoneInput.addEventListener("input",function(){validatePhoneNumber()});const toastHtml=`
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
`;function showToast(){document.body.insertAdjacentHTML("beforeend",toastHtml);let t=document.getElementById("toastQuestionSent"),e=bootstrap.Toast.getOrCreateInstance(t);e.show(),t.addEventListener("hidden.bs.toast",()=>{t.remove()})}const form=document.querySelector("#questionForm");form.addEventListener("submit",async function(t){t.preventDefault();let e=new FormData(form),o=document.querySelector('input[name="csrfmiddlewaretoken"]').value;form.reset(),showToast();try{let s=await fetch(`${window.origin}/api/save_question/`,{method:"POST",body:e,headers:{"X-CSRFToken":o}});s.status}catch(n){console.error("Ошибка запроса:",n)}});