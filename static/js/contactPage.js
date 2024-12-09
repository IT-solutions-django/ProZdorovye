import { L as LuminousGallery } from "./luminous-lightbox.js";

// Для открытия фотографий на полный экран
function initGallery() {
  var galleryItems = document.querySelectorAll(".license-card a")
  console.log(galleryItems)
    if (galleryItems.length > 0) {
        new LuminousGallery(galleryItems);
    }
}

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
      let t = await fetch(`${window.origin}/api/get_contact_info_html/`),
          a = await t.json();
          console.log(a)
      return a
  } catch (e) {
      console.error("Ошибка при загрузке данных:", e)
  }
}

loadYandexMapsScript();
const contact_info_html = await fetchContactInfoHtml();
var screenWidth = window.innerWidth,
  contacts = `  
  <style type="text/css" class="lum-base-styles">
  @keyframes lum-noop {
    0% {
      zoom:1
    }
  }
  .lum-lightbox {
    position: fixed;
    display: none;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .lum-lightbox.lum-open {
    display: block;
    z-index: 1000000
  }

  .lum-lightbox.lum-closing,
  .lum-lightbox.lum-opening {
    animation: lum-noop 1ms
  }

  .lum-lightbox-inner {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden
  }

  .lum-lightbox-loader {
    display: none
  }

  .lum-lightbox-inner img {
    max-width: 100%;
    max-height: 100%
  }

  .lum-lightbox-image-wrapper {
    vertical-align: middle;
    display: table-cell;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.5);
  }

  #sectionContact {
    height: 1080px;
  }
  #sectionContact #map {
    height: 1080px;
  } 
  </style>
  

  <div id="sectionContact" class="section section--contact">
    <div id="map"></div>

    <div class="contacts container">
      <div class="contacts-card">
        <h1 class="contacts-card__header">Контакты</h1>
        <div class="contacts-card__content">
          ${ contact_info_html }
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
  </div>

  `;

document.querySelector("#contact").innerHTML = contacts;
initGallery()


