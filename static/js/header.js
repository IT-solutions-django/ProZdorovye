var header = ` <div class="section section--header">
      <div class="header container">
        <a href="${window.origin}" class="header__logo">
          <img
            class="header__logo-image"
            src="${window.origin}/static/images/logo-header.svg"
          />
        </a>
        <button class="header__hamburger" aria-label="Toggle menu">
          <img
            class="header__hamburger--menu"
            src="${window.origin}/static/images/burger.svg"
            alt=""
          />
          <img
            class="header__hamburger--close"
            src="${window.origin}/static/images/close.svg"
            alt=""
          />
        </button>
        <div class="header__nav">
          <div class="nav__links">
            <a href="${window.origin}/services/osteopatiya" class="nav__link">Услуги</a>
            <a href="${window.origin}/doctors" class="nav__link">Специалисты</a>
            <a href="${window.origin}/prices" class="nav__link">Цены</a>
            <a href="${window.origin}/contacts" class="nav__link">Контакты</a>
          </div>
          <div class="bvi-open" id="specialButton">
            <img
              src="${window.origin}/static/images/eye.svg"
              alt="ВЕРСИЯ ДЛЯ СЛАБОВИДЯЩИХ"
              title="ВЕРСИЯ ДЛЯ СЛАБОВИДЯЩИХ"
            />
            Для слабовидящих
          </div>
          <div class="nav__cta">
            <a href="https://booking.medflex.ru/?user=5c4da05a2aec068f47734a86101c9333">
              <button class="button-osta button-osta--small">
                Записаться на прием
              </button>
            </a>
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
