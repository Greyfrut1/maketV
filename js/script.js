$(function (){
  $('.testimonials__slider').slick({
    slidesToScroll:2,
    slidesToShow: 2,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings:{
          slidesToScroll:1,
          slidesToShow: 1,
          dots: true,
          arrows: false,
        }
      }
    ]
  })
  $('.features__slider').slick({
    slidesToScroll:4,
    slidesToShow: 4,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings:{
          slidesToScroll:2,
          slidesToShow: 2,
          dots: true,
          arrows: false,
        }
      }
    ]
  })
})

function initMap(){
  var pos = {lat: 25.76386777994053,  lng: -80.19023272925295};
  var opt = {
    scrollwheel: false,
    scaleControl: false,
    mapTypeControl: false,
    disableDefaultUI:false,
    center: pos,
    zoom: 17
  }

  var Mymap = new google.maps.Map(document.getElementById("map"), opt);

  var marker = new google.maps.Marker({
    position: pos,
    map: Mymap
  })
}

const hamb = document.querySelector('#hamb');
const popup = document.querySelector('#popup');
const menu = document.querySelector('#menu').cloneNode(1);

hamb.addEventListener("click", hambHandler);

function hambHandler(e){
  e.preventDefault();
  popup.classList.toggle("open");
  renderPopup();
}

function renderPopup(){
  popup.appendChild(menu);
}