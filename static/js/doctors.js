import{getRoleForDirections as t}from"./speciality_mapper.js";export async function printDoctors(e,i="Все направления",s=!0,a=!0){var c=window.innerWidth,l=` <div class="section section--doctors">
  <div class="specialists-section container">
    <div class="specialists-section__header">${e}</div>
    <div class="specialists-section__categories" style="display: ${s?"block":"none"};">
      <div class="categories-list" id="categoryButtons"></div>
    </div>
    <div class="specialists-list ${a?"embla":""}" id="specialistsList">
      <div class="specialists-list__container ${a?"embla__container":""}"></div>
      ${a?`
        <button class="embla__button embla__button--prev" type="button">
          <img src="${window.origin}/static/images/left.svg" alt="" />
        </button>
        <button class="embla__button embla__button--next" type="button">
          <img src="${window.origin}/static/images/right.svg" alt="" />
        </button>
      `:""}
    </div>

  </div>
</div>`;document.querySelector("#doctors").innerHTML=l;let o;try{let r=await fetch(`${window.location.origin}/doctors/api/doctors`);if(!r.ok)throw Error("Ошибка");o=await r.json()}catch(n){console.error("Ошибка:",n)}let d=o,v;try{let p=await fetch(`${window.location.origin}/services/api/specialities`);if(!p.ok)throw Error("Ошибка");v=await p.json()}catch(u){console.error("Ошибка:",u)}let b=v;function g(e=i){let s=document.querySelector(".specialists-list__container"),l="Все направления"===e?d:d.filter(t=>t.categories.includes(e));if(s.innerHTML=l.map(e=>{let i=t(e.categories);return`
    <a href="${e.url}" class="specialist-card">
      <div class="specialist-card__image">
        <img src="${e.image ? e.image : `${window.location.origin}/static/images/default.webp`}" alt="${e.name}" />
      </div>
      <div class="specialist-card__info">
        <div class="specialist-card__name">${e.name}</div>
        <div class="specialist-card__role">${i}</div>
        <div class="specialist-card__experience">Стаж c ${e.experience} г.</div>
        <button class="specialist-card__btn">Записаться</button>
      </div>
    </a>
  `}).join(""),a){let o=document.getElementById("specialistsList"),r=EmblaCarousel(o,{loop:!1,slidesToScroll:c>1200?3:"auto"}),n=document.querySelector("#specialistsList .embla__button--prev"),v=document.querySelector("#specialistsList .embla__button--next"),p=()=>{n.classList.toggle("embla__button--disabled",!r.canScrollPrev()),v.classList.toggle("embla__button--disabled",!r.canScrollNext())};n.addEventListener("click",r.scrollPrev),v.addEventListener("click",r.scrollNext),r.on("select",p),r.on("init",p)}}b.unshift("Все направления"),!function t(){let e=document.getElementById("categoryButtons");e.innerHTML=b.map(t=>`
  <div class="category-button${t===i?" active":""}" data-category="${t}">
    ${t}
  </div>
`).join("")}(),g(i),document.querySelectorAll(".category-button").forEach(t=>{t.addEventListener("click",t=>{var e;let i=t.target.getAttribute("data-category");e=t.target,document.querySelectorAll(".category-button").forEach(t=>{t.classList.remove("active")}),e.classList.add("active"),g(i)})})}