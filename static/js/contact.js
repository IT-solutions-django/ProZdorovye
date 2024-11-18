function printYaMap() {
  ymaps.ready(function t() {
      screenWidth > 1200 ? (a = 12, e = [43.149473, 131.815747]) : (a = 11, e = [43.150813, 131.931514]);
      var a, e, n = new ymaps.Map("map", {
          center: e,
          zoom: a,
          controls: []
      });
      n.behaviors.disable("scrollZoom");
      var o = new ymaps.control.ZoomControl({
          options: {
              position: {
                  right: 10,
                  top: 50
              },
              size: "small"
          }
      });
      n.controls.add(o);
      var s = new ymaps.Placemark([43.172179, 131.950981], {
              hintContent: "улица Майора Филипова, 11к2",
              balloonContent: "улица Майора Филипова, 11к2"
          }, {
              iconLayout: "default#image",
              iconImageHref: `${window.origin}/static/images/pin.svg`,
              iconImageSize: [30, 42],
              iconImageOffset: [-15, -42]
          }),
          i = new ymaps.Placemark([43.129446, 131.912048], {
              hintContent: "Некрасовская улица, 90",
              balloonContent: "Некрасовская улица, 90"
          }, {
              iconLayout: "default#image",
              iconImageHref: `${window.origin}/static/images/pin.svg`,
              iconImageSize: [30, 42],
              iconImageOffset: [-15, -42]
          });
      n.geoObjects.add(s), n.geoObjects.add(i)
  })
}

function loadYandexMapsScript() {
  let t = document.createElement("script");
  t.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU", t.type = "text/javascript", t.onload = function() {
      printYaMap()
  }, document.head.appendChild(t)
}
async function fetchContactInfoHtml() {
  try {
      let t = await fetch(`${window.origin}/api/get_request_form_html/`),
          a = await t.json();
      return a
  } catch (e) {
      console.error("Ошибка при загрузке данных:", e)
  }
}
loadYandexMapsScript();
const form_html = await fetchContactInfoHtml();
console.log(form_html)
var screenWidth = window.innerWidth,
  contacts = `   
<div id="sectionContact" class="section section--contact">
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
            ${form_html}
          </div>
          <div class="social-links">
            <a href="https://t.me/pro_zdorovye_vl" target="_blank">
              <img src="${window.origin}/static/images/tg.svg" alt="Telegram" />
            </a>
            <a href="https://wa.me/79149677552" target="_blank">
              <img src="${window.origin}/static/images/whatsapp.svg" alt="WhatsApp" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>`;
document.querySelector("#contact").innerHTML = contacts;
var phoneInput = document.getElementById("contactForm").querySelector("#id_phone"),
  phoneMask = IMask(phoneInput, {
      mask: "+{7} (000) 000 00 00"
  });

function validatePhoneNumber() {
  let t = phoneInput.value.replace(/\D/g, "");
  return t.length < 11 ? (phoneInput.setCustomValidity("Необходимо минимум 11 цифр"), !1) : (phoneInput.setCustomValidity(""), !0)
}
phoneInput.addEventListener("input", function() {
  validatePhoneNumber()
});
const toastHtml = `
<div class="toast-container position-fixed bottom-0 end-0 p-3">
<div id="toastRequestSent" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-header">
    <img src="${window.origin}/static/images/favicon-16x16.png" class="rounded me-2" alt="...">
    <strong class="me-auto">Форма была отправлена!</strong>
    <small>только что</small>
    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
  <div class="toast-body">
    С вами свяжутся в ближайшее время
  </div>
</div>
</div>
`;

function showToast() {
  document.body.insertAdjacentHTML("beforeend", toastHtml);
  let t = document.getElementById("toastRequestSent"),
      a = bootstrap.Toast.getOrCreateInstance(t);
  a.show(), t.addEventListener("hidden.bs.toast", () => {
      t.remove()
  })
}
const form = document.querySelector("#contactForm");
form.addEventListener("submit", async function(t) {
  t.preventDefault();
  let a = new FormData(form),
      e = document.querySelector('input[name="csrfmiddlewaretoken"]').value;
  form.reset(), showToast();
  try {
      let n = await fetch(`${window.origin}/api/save_request/`, {
          method: "POST",
          body: a,
          headers: {
              "X-CSRFToken": e
          }
      });
      n.status
  } catch (o) {
      console.error("Ошибка запроса:", o)
  }
});