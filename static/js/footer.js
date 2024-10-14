(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload"))

    return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]'))
    r(e);
  new MutationObserver(e => {
    for (const s of e) if (s.type === "childList")
      for (const a of s.addedNodes) a.tagName === "LINK" && a.rel === "modulepreload" && r(a)
  })
    .observe(document, { childList: !0, subtree: !0 });
  function o(e) {
    const s = {};
    return e.integrity && (s.integrity = e.integrity), e.referrerPolicy && (s.referrerPolicy = e.referrerPolicy), e.crossOrigin === "use-credentials" ? s.credentials = "include" : e.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s
  } function r(e) { if (e.ep) return; e.ep = !0; const s = o(e); fetch(e.href, s) }
})(); var i = ` <div class="section section--header">
      <div class="header container">
        <a href="/" class="header__logo">
          <img
            class="header__logo-image"
            src="${window.location.origin}/static/images/logo-header.svg"
          />
        </a>
        <button class="header__hamburger" aria-label="Toggle menu">
          <img
            class="header__hamburger--menu"
            src="${window.location.origin}/static/images/burger.svg"
            alt=""
          />
          <img
            class="header__hamburger--close"
            src="${window.location.origin}/static/images/close.svg"
            alt=""
          />
        </button>
        <div class="header__nav">
          <div class="nav__links">
            <a href="${window.location.origin}/services/osteopatiya" class="nav__link">Услуги</a>
            <a href="${window.location.origin}/doctors" class="nav__link">Специалисты</a>
            <a href="${window.location.origin}/prices" class="nav__link">Цены</a>
            <a href="/contacts.html" class="nav__link">Контакты</a>
          </div>
          <div class="bvi-open" id="specialButton">
            <img
              src="${window.location.origin}/static/images/eye.svg"
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
    </div>`; document.querySelector("#header").innerHTML = i; document.querySelector(".header__hamburger").addEventListener("click", function () { this.classList.toggle("active"), document.querySelector(".header__nav").classList.toggle("active") }); var l = `    <div class="section section--footer">
      <div class="footer container">
        <div class="footer__left">
          <div class="footer__services">
            <div class="footer__links">
              <a class="footer__link" href="/service.html">Услуги</a>
              <a class="footer__link" href="/doctors.html">Специалисты</a>
              <a class="footer__link" href="/price.html" >Цены</a>
              <a class="footer__link" href="/contacts.html">Контакты</a>
            </div>
            <div class="footer__logo">
              <img
                class="footer__logo-image"
                src="${window.location.origin}/static/images/logo-footer.svg"
                alt="Logo"
              />
            </div>
          </div>
        </div>
        <div class="footer__right">
          <div class="footer__info">
            <button class="button-osta button-osta--small" href="#">
              Записаться на прием
            </button>
            <div class="footer__copyright">© 2024 osteomeddv.ru</div>
          </div>
          <div class="social-links">
            <a href="https://t.me/your-telegram-link" target="_blank">
              <img src="${window.location.origin}/static/images/tg.svg" alt="Telegram" />
            </a>
            <a href="https://wa.me/your-whatsapp-number" target="_blank">
              <img src="${window.location.origin}/static/images/whatsapp.svg" alt="WhatsApp" />
            </a>
            <a href="https://vk.com/your-vk-link" target="_blank">
              <img src="${window.location.origin}/static/images/vk.svg" alt="VKontakte" />
            </a>
          </div>
        </div>
      </div>
    </div>
`; document.querySelector("#footer").innerHTML = l;
