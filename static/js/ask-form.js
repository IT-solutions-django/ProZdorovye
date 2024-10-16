var askForm =  `    <section class="section section--questions">
      <div class="questions container">
        <h2 class="questions__title">Остались вопросы?</h2>
        <p class="questions__description">
          Задайте вопрос и мы обязательно вам ответим
        </p>
        <form class="questions__form">
          <div class="form__field">
            <input type="text" id="name" class="form__input" placeholder=" " />
            <label for="name" class="form__label">Имя</label>
          </div>
          <div class="questions__input-group questions__input-group--double">
            <div class="form__field">
              <input
                type="tel"
                id="phone"
                class="form__input"
                placeholder=" "
              />
              <label for="phone" class="form__label">Телефон</label>
            </div>
            <div class="form__field">
              <input
                type="email"
                id="email"
                class="form__input"
                placeholder=" "
              />
              <label for="email" class="form__label">E-mail</label>
            </div>
          </div>
          <div class="form__field">
            <textarea
              id="message"
              class="form__input"
              placeholder=" "
            ></textarea>
            <label for="message" class="form__label">Сообщение</label>
          </div>
          <button class="form__button button-osta">Отправить</button>
        </form>
      </div>
    </section>`


    document.querySelector("#ask-form").innerHTML = askForm;