var screenWidth = window.innerWidth;

function runServiceSlider() {
    var e;
    e = screenWidth > 1200 ? 4 : "auto";
    let t = document.getElementById("service-list-slider"),
        l = {
            loop: !1,
            slidesToScroll: e
        },
        i = EmblaCarousel(t, l),
        n = document.querySelector(".embla__button--prev"),
        r = document.querySelector(".embla__button--next"),
        c = () => {
            i.canScrollPrev() ? n.classList.remove("embla__button--disabled") : n.classList.add("embla__button--disabled"), i.canScrollNext() ? r.classList.remove("embla__button--disabled") : r.classList.add("embla__button--disabled")
        };
    n.addEventListener("click", i.scrollPrev), r.addEventListener("click", i.scrollNext), i.on("select", c), i.on("init", c)
}

function runClinicPhotoSlider() {
    let e = EmblaCarousel(document.getElementById("mainCarousel"), {
        loop: !1
    });
    EmblaCarousel(document.getElementById("thumbCarousel"), {
        containScroll: "keepSnaps"
    });
    let t = document.querySelectorAll(".clinic-image__thumbs-image");
    t.forEach((t, l) => {
        t.addEventListener("click", () => {
            e.scrollTo(l)
        })
    }), e.on("select", () => {
        let l = e.selectedScrollSnap();
        t.forEach((e, t) => {
            e.classList.toggle("clinic-image__thumbs-image--active", t === l)
        })
    })
}

function addReviewsSpoiler() {
    document.querySelectorAll(".review-card").forEach(e => {
        let t = e.querySelector(".review-card__text");
        if (t.scrollHeight > 215) {
            let l = document.createElement("button");
            l.classList.add("review-card__toggle", "active"), l.innerText = "Читать полностью", l.addEventListener("click", function() {
                t.classList.contains("expanded") ? (t.classList.remove("expanded"), l.innerText = "Читать полностью") : (t.classList.add("expanded"), l.innerText = "Свернуть")
            }), t.after(l)
        }
    })
}
document.addEventListener("DOMContentLoaded", () => {
    addReviewsSpoiler();
    runServiceSlider();
    runClinicPhotoSlider();
});