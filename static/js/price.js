let directions = []; // Масив направлений
let services = []; // Массив услуг

async function fetchDirections() {
  try {
    const response = await fetch(`${window.origin}/services/api/specialities/`);
    const data = await response.json();

    directions = data;
    directions.unshift('Все направления');
    renderDirections(directions);
  }
  catch (error) {
    console.error('Ошибка при загрузке данных:', error);
  }
}

async function fetchServices() {
  try {
    const response = await fetch(`${window.origin}/prices/api/prices/`);
    const data = await response.json();

    services = data;
    renderServices(services);
  }
  catch (error) {
    console.error('Ошибка при загрузке данных:', error);
  }
}
  
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
    fetchDirections();
  
    // Отрисовываем все услуги при загрузке страницы
    fetchServices();
  });