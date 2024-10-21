function printYaMap() {
  ymaps.ready(init);

  function init() {
    var zoomLevel;
    var center;

    if (screenWidth > 1200) {
      zoomLevel = 12;
      center = [43.149473, 131.815747];
    } else {
      zoomLevel = 11; // Зум для мобильных устройств
      center = [43.150813, 131.931514];
    }

    // Инициализация карты
    var myMap = new ymaps.Map("map", {
      center: center, // Центр карты между двумя точками
      zoom: zoomLevel, // Масштаб карты
      controls: [], // Отключаем все контроллы
    });

    // Отключаем возможность масштабирования карты с помощью скролла мыши
    myMap.behaviors.disable("scrollZoom");

    // Добавляем только контролы для управления масштабом (плюс и минус)
    var zoomControl = new ymaps.control.ZoomControl({
      options: {
        position: { right: 10, top: 50 }, // Переносим контрол вправо
        size: "small", // Устанавливаем размер кнопок
      },
    });
    myMap.controls.add(zoomControl);

    // Создание пина 1
    var placemark1 = new ymaps.Placemark(
      [43.172179, 131.950981],
      {
        hintContent: "улица Майора Филипова, 11к2",
        balloonContent: "улица Майора Филипова, 11к2",
      },
      {
        iconLayout: "default#image",
        iconImageHref: `${window.origin}/static/images/pin.svg`, // Путь к вашему SVG файлу для первого пина
        iconImageSize: [30, 42], // Размер иконки
        iconImageOffset: [-15, -42], // Смещение иконки
      }
    );

    // Создание пина 2
    var placemark2 = new ymaps.Placemark(
      [43.129446, 131.912048],
      {
        hintContent: "Некрасовская улица, 90",
        balloonContent: "Некрасовская улица, 90",
      },
      {
        iconLayout: "default#image",
        iconImageHref: `${window.origin}/static/images/pin.svg`, // Путь к вашему SVG файлу для второго пина
        iconImageSize: [30, 42], // Размер иконки
        iconImageOffset: [-15, -42], // Смещение иконки
      }
    );

    // Добавляем метки на карту
    myMap.geoObjects.add(placemark1);
    myMap.geoObjects.add(placemark2);
  }
}

function loadYandexMapsScript() {
  const script = document.createElement("script");
  script.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU";
  script.type = "text/javascript";
  script.onload = function () {
    printYaMap();
  };
  document.head.appendChild(script);
}

loadYandexMapsScript();


// Получение HTML-кода формы 
async function fetchContactFormHtml() {
  try {
    const response = await fetch(`${window.origin}/api/get_request_form_html/`);
    const data = await response.json();

    const form_html = data;
    return form_html;
  }
  catch (error) {
    console.error('Ошибка при загрузке данных:', error);
  }
}
const form_html = await fetchContactFormHtml();
var screenWidth = window.innerWidth;
var contacts = `   <div id="sectionContact" class="section section--contact">
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
    </div>`;

// Маска для номера телефона
document.querySelector("#contact").innerHTML = contacts;
var phoneInput = document.getElementById('contactForm').querySelector('#id_phone');
var phoneMask = IMask(phoneInput, {
  mask: '+{7} (000) 000 00 00' 
});

// Валидация номера телефона
function validatePhoneNumber() {
  const digitsOnly = phoneInput.value.replace(/\D/g, '');

  if (digitsOnly.length < 11) {
    phoneInput.setCustomValidity("Необходимо минимум 11 цифр");
    return false;
  } else {
    phoneInput.setCustomValidity("");
    return true;
  }
}
phoneInput.addEventListener("input", function () {
  validatePhoneNumber();
});

// Обработка отправки формы
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
const form = document.querySelector('#contactForm');
form.addEventListener('submit', async function (event) {
  event.preventDefault();

  const formData = new FormData(form);
  const csrfToken = document.querySelector('input[name="csrfmiddlewaretoken"]').value;

  try {
    const response = await fetch(`${window.origin}/api/save_request/`, {
      method: 'POST',
      body: formData,
      headers: {
        'X-CSRFToken': csrfToken, 
      }
    });

    if (response.status === 200) {
      const data = await response.json();

      // Вставляем HTML тоста в DOM
      document.body.insertAdjacentHTML('beforeend', toastHtml);

      const toastElement = document.getElementById('toastRequestSent');
      const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastElement);
      toastBootstrap.show();

      toastElement.addEventListener('hidden.bs.toast', () => {
        toastElement.remove();
      });

      form.reset();
    } else {
      alert('Ошибка при отправке формы. Попробуйте снова.');
    }
  } catch (error) {
    console.error('Ошибка запроса:', error);
  }
});