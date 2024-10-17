var footer = `    <div class="section section--footer">
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
                src="${window.origin}/static/images/logo-footer.svg"
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
              <img src="${window.origin}/static/images/tg.svg" alt="Telegram" />
            </a>
            <a href="https://wa.me/your-whatsapp-number" target="_blank">
              <img src="${window.origin}/static/images/whatsapp.svg" alt="WhatsApp" />
            </a>
            <a href="https://vk.com/your-vk-link" target="_blank">
              <img src="${window.origin}/static/images/vk.svg" alt="VKontakte" />
            </a>
          </div>
        </div>
      </div>
    </div>
`;

document.querySelector("#footer").innerHTML = footer;
