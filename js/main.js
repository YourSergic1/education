/*document.addEventListener("DOMContentLoaded", function(event) { 
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');
  const switchModal = () =>{
    modal.classList.toggle('modal--visible');
  }
  modalBtn.forEach(element => {
    element.addEventListener('click' , switchModal );
  });
  closeBtn.addEventListener('click' , switchModal );
});
*/

$(document).ready(function () {
  var modal = $('.modal'),
    modalBtn = $('[data-toggle=modal]'),
    closeBtn = $('.modal__close');
  

    modalBtn.on('click' , function(){
      modal.toggleClass('modal--visible');
    });
    closeBtn.on('click' , function(){
      modal.toggleClass('modal--visible');
    });

    var mySwiper = new Swiper ('.swiper-container' ,{
      loop: true ,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    var next = $('.swiper-button-next');
    var prev = $('.swiper-button-prev');
    var bullets = $('.swiper-pagination');

    next.css('left', prev.width()+60+bullets.width())
    bullets.css('left' , prev.width()+30 )

    new WOW().init();


    $('.modal__form').validate({
      errorClass: "invalid",
      rules:{
        userName: "required",
        userPhone: "required",
        userEmail: {
          required: true,
          email: true
        }
      },

      messages:{
        userName: "Имя обязатеьно!",
        userPhone: "Телефон обязателен!",
        userEmail: {
          required: "Обязательно укажите Email",
          email: "Введите в формате: sobaka@gmail.com"
        }
      }
    });

    $('.footer__form').validate({
      errorClass: "invalid",
      rules:{
        userName: "required",
        userPhone: "required",
        userQuestion: "required"
        
        
      },

      messages:{
        userName: "Имя обязатеьно!",
        userPhone: "Телефон обязателен!",
        userQuestion: "Вопрос обязателен",
      }
    });

    $('.control__form').validate({
      errorClass: "invalid",
      rules:{
        userName: "required",
        userPhone: "required",
      },

      messages:{
        userName: "Имя обязатеьно!",
        userPhone: "Телефон обязателен!",
      }
    });


    $('[type=tel]').mask('+7(000) 000-00-00' , {placeholder: "+7 (___) ___-__-__"});

});