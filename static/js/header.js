var header = ` <div class="section section--header">
      <div class="header container">
        <a href="/" class="header__logo">
          <img
            class="header__logo-image"
            src="./assets/images/logo-header.svg"
          />
        </a>
        <button class="header__hamburger" aria-label="Toggle menu">
          <img
            class="header__hamburger--menu"
            src="./assets/images/burger.svg"
            alt=""
          />
          <img
            class="header__hamburger--close"
            src="./assets/images/close.svg"
            alt=""
          />
        </button>
        <div class="header__nav">
          <div class="nav__links">
            <a href="/service.html" class="nav__link">Услуги</a>
            <a href="/doctors.html" class="nav__link">Специалисты</a>
            <a href="/price.html" class="nav__link">Цены</a>
            <a href="/contacts.html" class="nav__link">Контакты</a>
          </div>
          <div class="bvi-open" id="specialButton">
            <img
              src="./assets/images/eye.svg"
              alt="ВЕРСИЯ ДЛЯ СЛАБОВИДЯЩИХ"
              title="ВЕРСИЯ ДЛЯ СЛАБОВИДЯЩИХ"
            />
            Для слабовидящих
          </div>
          <div class="nav__cta">
            <button class="button-osta button-osta--small">
              Записаться на прием
            </button>
          </div>
        </div>
      </div>
    </div>`;

document.querySelector("#header").innerHTML = header;

document
  .querySelector(".header__hamburger")
  .addEventListener("click", function () {
    this.classList.toggle("active");
    document.querySelector(".header__nav").classList.toggle("active");
  });
