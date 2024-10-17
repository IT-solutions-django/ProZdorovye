var footer = `    <div class="section section--footer">
      <div class="footer container">
        <div class="footer__left">
          <div class="footer__services">
            <div class="footer__links">
              <a class="footer__link" href="${window.origin}/services/osteopatiya">Услуги</a>
              <a class="footer__link" href="${window.origin}/doctors">Специалисты</a>
              <a class="footer__link" href="${window.origin}/prices" >Цены</a>
              <a class="footer__link" href="${window.origin}/contacts">Контакты</a>
            </div>
            <a href=""${window.origin}>
              <div class="footer__logo">
                <img
                  class="footer__logo-image"
                  src="${window.origin}/static/images/logo-footer.svg"
                  alt="Logo"
                />
              </div>
            </a>
          </div>
        </div>
        <div class="footer__right">
          <div class="footer__info">
            <a href="https://booking.medflex.ru/?user=5c4da05a2aec068f47734a86101c9333">
              <button class="button-osta button-osta--small" href="#">
                Записаться на прием
              </button>
            </a>
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
