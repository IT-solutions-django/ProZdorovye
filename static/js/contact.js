var l=window.innerWidth,n=`   <div class="section section--contact">
      <div id="map"></div>

      <div class="contacts container">
        <div class="contacts-card">
          <div class="contacts-card__header">Контакты</div>
          <div class="contacts-card__content">
            <div class="contacts-card__info">
              <div class="contact-details">
                <div class="contact-details__address">Некрасовская 90</div>
                <a href="tel:74232077055" class="contact-details__phone">+7 (423) 207-70-55</a>
              </div>
              <div class="contact-details">
                <div class="contact-details__address">
                  Майора Филипова 11 корпус 2
                </div>
                <a href="tel:79149677552" class="contact-details__phone">+7 (914) 967-75-52</a>
              </div>
              <div class="form">
                <div class="form__title">Подберем процедуру под ваш запрос</div>

                <div class="form__field">
                  <input
                    type="text"
                    id="name"
                    class="form__input"
                    placeholder=" "
                  />
                  <label for="name" class="form__label">Имя</label>
                </div>
                <div class="form__row">
                  <div class="form__field">
                    <input
                      type="text"
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
                <button class="form__button button-osta">
                  Заказать звонок
                </button>
              </div>
            </div>
            <div class="social-links">
              <a href="https://t.me/your-telegram-link" target="_blank">
                <img src="./assets/images/tg.svg" alt="Telegram" />
              </a>
              <a href="https://wa.me/your-whatsapp-number" target="_blank">
                <img src="./assets/images/whatsapp.svg" alt="WhatsApp" />
              </a>
              <a href="https://vk.com/your-vk-link" target="_blank">
                <img src="./assets/images/vk.svg" alt="VKontakte" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>`;document.querySelector("#contact").innerHTML=n;function d(){ymaps.ready(a);function a(){var e,s;l>1200?(e=12,s=[43.149473,131.815747]):(e=11,s=[43.150813,131.931514]);var t=new ymaps.Map("map",{center:s,zoom:e,controls:[]});t.behaviors.disable("scrollZoom");var i=new ymaps.control.ZoomControl({options:{position:{right:10,top:50},size:"small"}});t.controls.add(i);var o=new ymaps.Placemark([43.172179,131.950981],{hintContent:"улица Майора Филипова, 11к2",balloonContent:"улица Майора Филипова, 11к2"},{iconLayout:"default#image",iconImageHref:"./assets/images/pin.svg",iconImageSize:[30,42],iconImageOffset:[-15,-42]}),c=new ymaps.Placemark([43.129446,131.912048],{hintContent:"Некрасовская улица, 90",balloonContent:"Некрасовская улица, 90"},{iconLayout:"default#image",iconImageHref:"./assets/images/pin.svg",iconImageSize:[30,42],iconImageOffset:[-15,-42]});t.geoObjects.add(o),t.geoObjects.add(c)}}function r(){const a=document.createElement("script");a.src="https://api-maps.yandex.ru/2.1/?lang=ru_RU",a.type="text/javascript",a.onload=function(){d()},document.head.appendChild(a)}r();
