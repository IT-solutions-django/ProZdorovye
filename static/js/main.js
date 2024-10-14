import "./footer.js";
import {E as c, p as a} from "./doctors.js";
import "./booking.js";
import "./contact.js";
var r = window.innerWidth;
function d() {
    var t;
    r > 1200 ? t = 4 : t = "auto";
    const l = document.getElementById("service-list-slider")
      , e = c(l, {
        loop: !1,
        slidesToScroll: t
    })
      , o = document.querySelector(".embla__button--prev")
      , s = document.querySelector(".embla__button--next")
      , i = () => {
        e.canScrollPrev() ? o.classList.remove("embla__button--disabled") : o.classList.add("embla__button--disabled"),
        e.canScrollNext() ? s.classList.remove("embla__button--disabled") : s.classList.add("embla__button--disabled")
    }
    ;
    o.addEventListener("click", e.scrollPrev),
    s.addEventListener("click", e.scrollNext),
    e.on("select", i),
    e.on("init", i)
}
function m() {
    const t = c(document.getElementById("mainCarousel"), {
        loop: !1
    });
    c(document.getElementById("thumbCarousel"), {
        containScroll: "keepSnaps"
    });
    const l = document.querySelectorAll(".clinic-image__thumbs-image");
    l.forEach( (n, e) => {
        n.addEventListener("click", () => {
            t.scrollTo(e)
        }
        )
    }
    ),
    t.on("select", () => {
        const n = t.selectedScrollSnap();
        l.forEach( (e, o) => {
            e.classList.toggle("clinic-image__thumbs-image--active", o === n)
        }
        )
    }
    )
}
d();
m();
document.addEventListener("DOMContentLoaded", function() {
    a("Наши специалисты", "Все направления")
});
