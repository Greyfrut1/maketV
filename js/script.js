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
        breakpoint: 769,
        settings:{
          slidesToScroll:2,
          slidesToShow: 2,
          dots: true,
          arrows: false,
        }
      },
      {
        breakpoint: 450,
        settings:{
          slidesToScroll:1,
          slidesToShow: 1,
          dots: true,
          arrows: false,
        }
      }
    ]
  })
})

function initMap(){
  var pos = {lat: 25.763680230740764,  lng: -80.18945669637938};
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

let form = document.querySelector('.contacts__form'),
    fromInput = document.querySelectorAll('.input'),
    inputEmail = document.querySelector('.input_email'),
    inputName = document.querySelector('.input_name'),
    inputSubject = document.querySelector('.input_subject'),
    inputTextarea = document.querySelector('.textarea');

form.onsubmit = function () {
  let emailVal = inputEmail.value,
      nameVal = inputName.value,
      subjectVal = inputSubject.value,
      textareaVal = inputTextarea.value;
  let i = 0;
  fromInput.forEach(function(input){
    if (input.value === '') {
      input.classList.add('error');
      input.placeholder = 'the field must be filled';
    } else {
      input.classList.remove('error');
      i = 1;
    }
  })
  if(i === 1){
    return true;
  }else{
    return false;
  }
}