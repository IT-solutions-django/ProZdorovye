// import EmblaCarousel from "embla-carousel";

var screenWidth = window.innerWidth;

function runServiceSlider() {
  var slidesToScroll;
  if (screenWidth > 1200) {
    slidesToScroll = 4;
  } else {
    slidesToScroll = "auto";
  }

  const emblaNode = document.getElementById("service-list-slider");
  const options = { loop: false, slidesToScroll: slidesToScroll };
  const emblaApi = EmblaCarousel(emblaNode, options);

  const prevButton = document.querySelector(".embla__button--prev");
  const nextButton = document.querySelector(".embla__button--next");

  const setButtonStates = () => {
    if (emblaApi.canScrollPrev()) {
      prevButton.classList.remove("embla__button--disabled");
    } else {
      prevButton.classList.add("embla__button--disabled");
    }

    if (emblaApi.canScrollNext()) {
      nextButton.classList.remove("embla__button--disabled");
    } else {
      nextButton.classList.add("embla__button--disabled");
    }
  };

  prevButton.addEventListener("click", emblaApi.scrollPrev);
  nextButton.addEventListener("click", emblaApi.scrollNext);

  emblaApi.on("select", setButtonStates);
  emblaApi.on("init", setButtonStates); // Инициализация состояния стрелок
}

function runClinicPhotoSlider() {
  const mainCarousel = EmblaCarousel(document.getElementById("mainCarousel"), {
    loop: false,
  });
  const thumbCarousel = EmblaCarousel(
    document.getElementById("thumbCarousel"),
    {
      containScroll: "keepSnaps",
    }
  );

 
  const thumbs = document.querySelectorAll(".clinic-image__thumbs-image");
  thumbs.forEach((thumb, index) => {
    thumb.addEventListener("click", () => {
      mainCarousel.scrollTo(index);
    });
  });

  
  mainCarousel.on("select", () => {
    const selectedIndex = mainCarousel.selectedScrollSnap();
    thumbs.forEach((thumb, index) => {
      thumb.classList.toggle(
        "clinic-image__thumbs-image--active",
        index === selectedIndex
      );
    });
  });
}

function addReviewsSpoiler() {
  document.querySelectorAll(".review-card").forEach((card) => {
    const textElement = card.querySelector(".review-card__text");
    console.log(textElement.scrollHeight);
    // Проверяем высоту блока с текстом
    if (textElement.scrollHeight > 215) {
      const toggleButton = document.createElement("button");
      toggleButton.classList.add("review-card__toggle", "active");
      toggleButton.innerText = "Читать полностью";
      toggleButton.addEventListener("click", function () {
        if (textElement.classList.contains("expanded")) {
          textElement.classList.remove("expanded");
          toggleButton.innerText = "Читать полностью";
        } else {
          textElement.classList.add("expanded");
          toggleButton.innerText = "Свернуть";
        }
      });
      textElement.after(toggleButton);
    }
  });
}
document.addEventListener("DOMContentLoaded", addReviewsSpoiler);

runServiceSlider();
runClinicPhotoSlider();
