// Массив направлений
const directions = [
    "Все направления",
    "Остеопатия",
    "Иглорефлексотерапия",
    "Йога",
    "Кинезиология",
    "АФК",
    "Мануальная терапия",
    "Массаж",
    "Пилатес",
    "Психология",
    "Терапия",
    "Эндокринология",
    "Нутрициология диетология",
  ];
  
  // Массив услуг с ID
  const services = [
    {
      id: 1,
      name: "Первичный прием",
      direction: "Остеопатия",
      duration: 60,
      price: 3000,
      doctor: "Шевченко Оксана Анатольевна",
    },
    {
      id: 2,
      name: "Вторичный прием",
      direction: "Остеопатия",
      duration: 60,
      price: 2500,
          doctor: "Шевченко Оксана Анатольевна",
    },
    {
      id: 3,
      name: "Йога",
      direction: "Йога",
      duration: 60,
      price: 2500,
          doctor: "Шевченко Оксана Анатольевна",
    },
    {
      id: 4,
      name: "Йога",
      direction: "Йога",
      duration: 90,
      price: 3000,
          doctor: "Шевченко Оксана Анатольевна",
    },
    {
      id: 5,
      name: "Коррекция 3 в 1",
      direction: "Кинезиология",
      duration: 120,
      price: 2500,
      doctor: "Шевченко Оксана Анатольевна",
    },
    {
      id: 6,
      name: "Невролог",
      direction: "Терапия",
      duration: 30,
      price: 3000,
      doctor: "Шевченко Оксана Анатольевна",
    },
    {
      id: 7,
      name: "Остеопатия Выезд",
      direction: "Остеопатия",
      duration: 60,
      price: 2500,
          doctor: "Шевченко Оксана Анатольевна",
    },
  ];
  
  // Функция для отрисовки направлений
  function renderDirections() {
    const directionsContainer = document.querySelector(".directions");
    directionsContainer.innerHTML = ""; // Очищаем контейнер перед новой отрисовкой
  
    directions.forEach((direction, index) => {
      const directionItem = `
          <div class="directions__item ${index === 0 ? "active" : ""}">
            ${direction}
          </div>
        `;
      directionsContainer.innerHTML += directionItem;
    });
  
    // Добавляем обработчики событий для кнопок направлений
    document.querySelectorAll(".directions__item").forEach((button) => {
      button.addEventListener("click", (event) => {
        const selectedDirection = event.target.innerText.trim();
  
        // Удаляем класс active у предыдущего выбранного элемента
        document
          .querySelector(".directions__item.active")
          .classList.remove("active");
  
        // Добавляем класс active к новому выбранному элементу
        event.target.classList.add("active");
  
        // Фильтруем и отрисовываем услуги по выбранному направлению
        const filteredServices = filterServicesByDirection(selectedDirection);
        renderServices(filteredServices);
      });
    });
  }
  
  // Функция для фильтрации услуг по направлению
  function filterServicesByDirection(direction) {
    if (direction === "Все направления") return services;
    return services.filter((service) => service.direction === direction);
  }
  
  // Функция для отрисовки услуг
  function renderServices(services) {
    const servicesContainer = document.querySelector(".services");
    servicesContainer.innerHTML = ""; // Очищаем контейнер перед новой отрисовкой
  
    services.forEach((service) => {
      const serviceItem = `
          <div class="services__item" data-id="${service.id}">
            <div class="services__name">${service.name}, ${service.doctor},   ${service.duration} мин</div>
            <div class="services__price">${service.price} ₽</div>
            <a class="services__button">Записаться на прием</a>
          </div>
        `;
      servicesContainer.innerHTML += serviceItem;
    });
  }
  
  // Инициализация
  document.addEventListener("DOMContentLoaded", () => {
    // Отрисовываем направления
    renderDirections();
  
    // Отрисовываем все услуги при загрузке страницы
    renderServices(services);
  });
  