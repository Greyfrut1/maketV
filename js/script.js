//Функція дял слайдерів
$(function () {
  //Слайдер для коментарів
  $('.testimonials__slider').slick({
    //Версія з двома коментарями для широких екранів
    slidesToScroll: 2,
    slidesToShow: 2,
    dots: true,
    arrows: false,
    responsive: [
      {
        //Версія з одним коментарем для екранів менших шириною ніж 768px
        breakpoint: 768,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
          dots: true,
          arrows: false,
        }
      }
    ]
  })
  //Сладер для адаптивного відображення фіч
  $('.features__slider').slick({
    //Версія без слайдера де відображаються всі фічі
    slidesToScroll: 4,
    slidesToShow: 4,
    dots: false,
    arrows: false,
    responsive: [
      {
        //Версія з відображенням 2х фіч для екранів меншою шириною ніж 769рх але більше за 450рх
        breakpoint: 769,
        settings: {
          slidesToScroll: 2,
          slidesToShow: 2,
          dots: true,
          arrows: false,
        }
      },
      {
        //Версія з відображенням 1ї фічі для екранів з шириною меншою ніж 450рх
        breakpoint: 450,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
          dots: true,
          arrows: false,
        }
      }
    ]
  })
})
//Функція для гугл карти
function initMap() {
  var pos = { lat: 25.763680230740764, lng: -80.18945669637938 };
  var opt = {
    scrollwheel: false,
    scaleControl: false,
    mapTypeControl: false,
    disableDefaultUI: false,
    center: pos,
    zoom: 17
  }

  var Mymap = new google.maps.Map(document.getElementById("map"), opt);

  var marker = new google.maps.Marker({
    position: pos,
    map: Mymap
  })
}

//Константи для підключення елементів для вспливаючого меню
const hamb = document.querySelector('#hamb');
const popup = document.querySelector('#popup');
const menu = document.querySelector('#menu').cloneNode(1);

hamb.addEventListener("click", hambHandler);
//Функція яка добавляє клас "ореn" для відображення вспливаючого меню
function hambHandler(e) {
  e.preventDefault();
  popup.classList.toggle("open");
  renderPopup();
}
//Функція як додає елементи меню в впливаюче меню
function renderPopup() {
  popup.appendChild(menu);
}
