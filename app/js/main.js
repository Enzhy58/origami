$(function () {

  $('.menu__open').on('click', function () {
    $('.menu__box').toggleClass('menu__box--active');
  });

  $('.menu__close').on('click', function () {
    $('.menu__box').removeClass('menu__box--active');
  });

  $('.filter__btn-open').on('click', function () {
    $('.filter').addClass('filter--active');
  });

  $('.filter__btn-close').on('click', function () {
    $('.filter').removeClass('filter--active');
  });

  $('.menu__open, .menu__close, .filter__btn-open, .filter__btn-close').on('click', function () {
    $('.wrapper').toggleClass('wrapper__fixed');
  });

  $('.user-nav__btn--cart').on('click', function () {
    $('.cart').toggleClass('cart--active');
  });
  
  $('.btn--add').on('click', function () {
    $('.cart').addClass('cart--active');
    setTimeout(function(){
      $('.cart--active').removeClass('cart--active');
    }, 1200);
  });


  $('.tabs__top-link').on('click', function (e) {
    e.preventDefault();
    $('.tabs__top-link').removeClass('tabs__top-link--active');
    $(this).addClass('tabs__top-link--active');

    $('.tabs__content-items').removeClass('tabs__content-items--active');
    $($(this).attr('href')).addClass('tabs__content-items--active');
  });

});



document.getElementById('home').onclick = function () {
  window.location.href = 'index.html';
};

document.getElementById('menu').onclick = function () {
  window.location.href = 'menu.html';
};

document.getElementById('product').onclick = function () {
  window.location.href = 'product.html';
};