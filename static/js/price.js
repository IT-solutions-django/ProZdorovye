import "./footer.js";
import "./ask-form.js";
const d = ["Все направления", "Остеопатия", "Иглорефлексотерапия", "Йога", "Кинезиология", "ЛФК", "Мануальная терапия", "Массаж", "Пилатес", "Психология", "Терапия", "Эндокринология"]
  , c = [{
    id: 1,
    name: "Первичный прием",
    direction: "Остеопатия",
    duration: 60,
    price: 3e3,
    doctor: "Шевченко Оксана Анатольевна"
}, {
    id: 2,
    name: "Вторичный прием",
    direction: "Остеопатия",
    duration: 60,
    price: 2500,
    doctor: "Шевченко Оксана Анатольевна"
}, {
    id: 3,
    name: "Йога",
    direction: "Йога",
    duration: 60,
    price: 2500,
    doctor: "Шевченко Оксана Анатольевна"
}, {
    id: 4,
    name: "Йога",
    direction: "Йога",
    duration: 90,
    price: 3e3,
    doctor: "Шевченко Оксана Анатольевна"
}, {
    id: 5,
    name: "Коррекция 3 в 1",
    direction: "Кинезиология",
    duration: 120,
    price: 2500,
    doctor: "Шевченко Оксана Анатольевна"
}, {
    id: 6,
    name: "Невролог",
    direction: "Терапия",
    duration: 30,
    price: 3e3,
    doctor: "Шевченко Оксана Анатольевна"
}, {
    id: 7,
    name: "Остеопатия Выезд",
    direction: "Остеопатия",
    duration: 60,
    price: 2500,
    doctor: "Шевченко Оксана Анатольевна"
}];
function s() {
    const t = document.querySelector(".directions");
    t.innerHTML = "",
    d.forEach( (i, e) => {
        const r = `
        <div class="directions__item ${e === 0 ? "active" : ""}">
          ${i}
        </div>
      `;
        t.innerHTML += r
    }
    ),
    document.querySelectorAll(".directions__item").forEach(i => {
        i.addEventListener("click", e => {
            const r = e.target.innerText.trim();
            document.querySelector(".directions__item.active").classList.remove("active"),
            e.target.classList.add("active");
            const o = a(r);
            n(o)
        }
        )
    }
    )
}
function a(t) {
    return t === "Все направления" ? c : c.filter(i => i.direction === t)
}
function n(t) {
    const i = document.querySelector(".services");
    i.innerHTML = "",
    t.forEach(e => {
        const r = `
        <div class="services__item" data-id="${e.id}">
          <div class="services__name">${e.name}, ${e.doctor},   ${e.duration} мин</div>
          <div class="services__price">${e.price} ₽</div>
          <a class="services__button">Записаться на прием</a>
        </div>
      `;
        i.innerHTML += r
    }
    )
}
document.addEventListener("DOMContentLoaded", () => {
    s(),
    n(c)
}
);
