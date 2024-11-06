let directions=[],services=[];async function fetchDirections(){try{(directions=await (await fetch(`${window.origin}/services/api/specialities/`)).json()).unshift("Все направления"),renderDirections(directions)}catch(e){console.error("Ошибка при загрузке данных:",e)}}async function fetchServices(){try{services=await (await fetch(`${window.origin}/prices/api/prices/`)).json(),renderServices(filterServicesByDirection("Все направления"))}catch(e){console.error("Ошибка при загрузке данных:",e)}}function renderDirections(){let e=document.querySelector(".directions");e.innerHTML="",directions.forEach((i,r)=>{let t=`
  <div class="directions__item ${0===r?"active":""}">
    ${i}
  </div>
`;e.innerHTML+=t}),document.querySelectorAll(".directions__item").forEach(e=>{e.addEventListener("click",e=>{let i=e.target.innerText.trim();document.querySelector(".directions__item.active").classList.remove("active"),e.target.classList.add("active"),renderServices(filterServicesByDirection(i))})})}function filterServicesByDirection(e){return"Все направления"===e?services.filter(e=>!0==e.is_displayed):services.filter(i=>i.direction===e)}function renderServices(e){let i=document.querySelector(".services");i.innerHTML="",e.forEach(e=>{let r=`
  <div class="services__item" data-id="${e.id}">
    <div class="services__name">${e.name}, ${e.doctor}${e.info?`, ${e.info}`:""}</div>
    <div class="services__price">${e.price} ₽</div>
    <a href="https://booking.medflex.ru/?user=5c4da05a2aec068f47734a86101c9333" target="_blank" class="services__button" target="_blank">Записаться на прием</a>
  </div>
`;i.innerHTML+=r})}document.addEventListener("DOMContentLoaded",()=>{fetchDirections(),fetchServices()});