// import EmblaCarousel from "embla-carousel";

export async function printDoctors(
  currentTitle,
  currentCategory = "Все направления",
  filtersIsShown = true,
  useSlider = true  
) {
  var screenWidth = window.innerWidth;
  var doctors = ` <div class="section section--doctors">
      <div class="specialists-section container">
        <div class="specialists-section__header">${currentTitle}</div>
        <div class="specialists-section__categories" style="display: ${
          filtersIsShown ? "block" : "none"
        };">
          <div class="categories-list" id="categoryButtons"></div>
        </div>
        <div class="specialists-list ${
          useSlider ? "embla" : ""
        }" id="specialistsList">
          <div class="specialists-list__container ${
            useSlider ? "embla__container" : ""
          }"></div>
          ${
            useSlider
              ? `
            <button class="embla__button embla__button--prev" type="button">
              <img src="${window.origin}/static/images/left.svg" alt="" />
            </button>
            <button class="embla__button embla__button--next" type="button">
              <img src="${window.origin}/static/images/right.svg" alt="" />
            </button>
          `
              : ""
          }
        </div>
  
      </div>
    </div>`;

  document.querySelector("#doctors").innerHTML = doctors;

  let specialists_from_ajax;
  try {
    const response = await fetch(`${window.location.origin}/doctors/api/doctors`); 
    if (!response.ok) {
      throw new Error('Ошибка');
    }
    specialists_from_ajax = await response.json();
  } catch (error) {
    console.error('Ошибка:', error);
  }
  const specialists = specialists_from_ajax;

  let categories_from_ajax;
  try {
    const response = await fetch(`${window.location.origin}/services/api/specialities`); 
    if (!response.ok) {
      throw new Error('Ошибка');
    }
    categories_from_ajax = await response.json();
  } catch (error) {
    console.error('Ошибка:', error);
  }
  const categories = categories_from_ajax;
  categories.unshift('Все направления');

  function renderCategories() {
    const categoryButtons = document.getElementById("categoryButtons");
    categoryButtons.innerHTML = categories
      .map(
        (category) => `
      <div class="category-button${
        category === currentCategory ? " active" : ""
      }" data-category="${category}">
        ${category}
      </div>
    `
      )
      .join("");
  }

  function renderSpecialists(filterCategory = currentCategory) {
    const specialistsListContainer = document.querySelector(
      ".specialists-list__container"
    );

    let filteredSpecialists =
      filterCategory === "Все направления"
        ? specialists
        : specialists.filter((specialist) =>
            specialist.categories.includes(filterCategory)
          );

    specialistsListContainer.innerHTML = filteredSpecialists
      .map(
        (specialist) => `
      <a href="${specialist.url}" class="specialist-card">
        <div class="specialist-card__image">
          <img src="${specialist.image}" alt="${specialist.name}" />
        </div>
        <div class="specialist-card__info">
          <div class="specialist-card__name">${specialist.name}</div>
          <div class="specialist-card__role">${specialist.role}</div>
          <div class="specialist-card__experience">Стаж c ${specialist.experience} г.</div>
          <button class="specialist-card__btn" data-id="${specialist.id}">Записаться</button>
        </div>
      </a>
    `
      )
      .join("");

    if (useSlider) {
      const emblaNode = document.getElementById("specialistsList");
      const emblaApi = EmblaCarousel(emblaNode, {
        loop: false,
        slidesToScroll: screenWidth > 1200 ? 3 : "auto",
      });

      const prevButton = document.querySelector(
        "#specialistsList .embla__button--prev"
      );
      const nextButton = document.querySelector(
        "#specialistsList .embla__button--next"
      );

      const setButtonStates = () => {
        prevButton.classList.toggle(
          "embla__button--disabled",
          !emblaApi.canScrollPrev()
        );
        nextButton.classList.toggle(
          "embla__button--disabled",
          !emblaApi.canScrollNext()
        );
      };

      prevButton.addEventListener("click", emblaApi.scrollPrev);
      nextButton.addEventListener("click", emblaApi.scrollNext);

      emblaApi.on("select", setButtonStates);
      emblaApi.on("init", setButtonStates);
    }

    document.querySelectorAll(".specialist-card__btn").forEach((button) => {
      button.addEventListener("click", (e) => {
        const doctorId = e.target.getAttribute("data-id");
        alert(`переход на запись к доктору id ${doctorId}`);
      });
    });
  }

  function updateActiveCategory(clickedButton) {
    document.querySelectorAll(".category-button").forEach((button) => {
      button.classList.remove("active");
    });
    clickedButton.classList.add("active");
  }

  function addCategoryEventListeners() {
    document.querySelectorAll(".category-button").forEach((button) => {
      button.addEventListener("click", (e) => {
        const category = e.target.getAttribute("data-category");
        updateActiveCategory(e.target);
        renderSpecialists(category);
      });
    });
  }

  // console.log(specialists);
  // console.log(categories);

  renderCategories();
  renderSpecialists(currentCategory);
  addCategoryEventListeners();
}
