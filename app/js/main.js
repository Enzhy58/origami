$(function () {

  $('.menu__btn').on('click', function () {
    $('.menu-left').toggleClass('menu-left--close');
  });

  $('.menu-left__btn').on('click', function () {
    $('.menu-left').addClass('menu-left--close');
  });

  $('.filter__btn-open').on('click', function () {
    $('.filter').addClass('filter--active');
  });

  $('.filter__btn-close').on('click', function () {
    $('.filter').removeClass('filter--active');
  });

  $('.menu__btn, .menu-left__btn, .filter__btn-open, .filter__btn-close').on('click', function () {
    $('.wrapper').toggleClass('wrapper__fixed');
  });

  var $range = $(".filter-price__input");
  var $inputFrom = $(".filter-price__from");
  var $inputTo = $(".filter-price__to");
  var instance;
  var min = 0;
  var max = 1200;
  var from = 0;
  var to = 0;

  $range.ionRangeSlider({
    skin: "round",
    type: "double",
    min: min,
    max: max,
    from: 200,
    to: 800,
    onStart: updateInputs,
    onChange: updateInputs,
    onFinish: updateInputs
  });

  instance = $range.data("ionRangeSlider");

  function updateInputs(data) {
    from = data.from;
    to = data.to;

    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);
  }

  $inputFrom.on("change", function () {
    var val = $(this).prop("value");

    // validate
    if (val < min) {
      val = min;
    } else if (val > to) {
      val = to;
    }

    instance.update({
      from: val
    });

    $(this).prop("value", val);

  });

  $inputTo.on("change", function () {
    var val = $(this).prop("value");

    // validate
    if (val < from) {
      val = from;
    } else if (val > max) {
      val = max;
    }

    instance.update({
      to: val
    });

    $(this).prop("value", val);
  });

  $('.select-style').styler();

  $('.product__list').slick({
    dots: false,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/product-prev.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/icons/product-next.svg" alt=""></button>',
  });

  $('.tabs__top-link').on('click', function (e) {
    e.preventDefault();
    $('.tabs__top-link').removeClass('tabs__top-link--active');
    $(this).addClass('tabs__top-link--active');

    $('.tabs__content-items').removeClass('tabs__content-items--active');
    $($(this).attr('href')).addClass('tabs__content-items--active');
  });

  $(".product__stars, .reviews__stars--unfill").rateYo({
    rating: 4,
    starWidth: "16px",
    normalFill: "#C1C1C1",
    ratedFill: "#FFB800",
    spacing: "6px"
  });

  $(".reviews__stars").rateYo({
    rating: 4,
    starWidth: "16px",
    normalFill: "#C1C1C1",
    ratedFill: "#FFB800",
    spacing: "6px",
    readOnly: true
  });

  $('.reviews__slider').slick({
    dots: true,
    infinite: false,
    prevArrow: '<button type="button" class="slick-prev"><svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="18.5" fill="white" fill-opacity="0.01" stroke ="#C2C2C2" stroke-width="3"/><path d="M21.1968 29.0492L13.4508 21.3033C12.8497 20.699 12.8497 19.7231 13.4508 19.1189L21.1968 11.3729C21.7761 10.8757 22.6328 10.8757 23.2122 11.3729C23.8614 11.9291 23.9372 12.9082 23.3811 13.5573L16.7351 20.2033L23.3811 26.8648C23.9822 27.469 23.9822 28.445 23.3811 29.0492C22.7769 29.6503 21.8009 29.6503 21.1968 29.0492Z" fill="#C2C2C2"/></svg ></button>',
    nextArrow: '<button type="button" class="slick-next"><svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="18.5" fill="white" fill-opacity="0.01" stroke ="#C2C2C2" stroke-width="3"/><path d="M18.6352 11.4508L26.3811 19.1967C26.9822 19.801 26.9822 20.7769 26.3811 21.3811L18.6352 29.1271C18.0558 29.6243 17.1991 29.6243 16.6197 29.1271C15.9706 28.5709 15.8947 27.5918 16.4509 26.9427L23.0968 20.2967L16.4508 13.6352C15.8497 13.031 15.8497 12.055 16.4508 11.4508C17.055 10.8497 18.031 10.8497 18.6352 11.4508Z" fill="#C2C2C2"/></svg ></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false
        }
      }
    ]
  });

  $('.interest__list').slick({
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="18.5" fill="white" fill-opacity="0.01" stroke ="#C2C2C2" stroke-width="3"/><path d="M21.1968 29.0492L13.4508 21.3033C12.8497 20.699 12.8497 19.7231 13.4508 19.1189L21.1968 11.3729C21.7761 10.8757 22.6328 10.8757 23.2122 11.3729C23.8614 11.9291 23.9372 12.9082 23.3811 13.5573L16.7351 20.2033L23.3811 26.8648C23.9822 27.469 23.9822 28.445 23.3811 29.0492C22.7769 29.6503 21.8009 29.6503 21.1968 29.0492Z" fill="#C2C2C2"/></svg ></button>',
    nextArrow: '<button type="button" class="slick-next"><svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="18.5" fill="white" fill-opacity="0.01" stroke ="#C2C2C2" stroke-width="3"/><path d="M18.6352 11.4508L26.3811 19.1967C26.9822 19.801 26.9822 20.7769 26.3811 21.3811L18.6352 29.1271C18.0558 29.6243 17.1991 29.6243 16.6197 29.1271C15.9706 28.5709 15.8947 27.5918 16.4509 26.9427L23.0968 20.2967L16.4508 13.6352C15.8497 13.031 15.8497 12.055 16.4508 11.4508C17.055 10.8497 18.031 10.8497 18.6352 11.4508Z" fill="#C2C2C2"/></svg ></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 4,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 4,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true
        }
      }
    ]
  });

  $('.discounts__list').slick({
    dots: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 2048,
        settings: "unslick"
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


  // var mixer = mixitup('.popular__list, .catalog__list');

  const mixer = mixitup('.popular__list', {
    load: {
      filter: '.category-rolls',
    },
  });
});



const btns = document.querySelectorAll('.counter__btn');

btns.forEach(btn => {
  btn.addEventListener('click', function () {
    const direction = this.dataset.direction;
    const inp = this.parentElement.querySelector('.counter__value');
    const currentValue = +inp.value;
    let newValue;

    if (direction === 'plus') {
      newValue = currentValue + 1;
    } else {
      newValue = currentValue - 1 > 0 ?
        currentValue - 1 : 0;
    }
    inp.value = newValue;
  });
});




const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]');
const counter = document.querySelector('[data-counter]');


btnMinus.addEventListener('click', function(){
  if (parseInt(counter.innerText) > 1) {
    counter.innerText = --counter.innerText;
  };
});

btnPlus.addEventListener('click', function (){
  counter.innerText = ++counter.innerText;
});


window.addEventListener('click', function (event) {
  if (event.target.dataset.action === 'plus') {
    const counterWrapper = event.target.closest('.counter-wrapper');
    const counter = counterWrapper.querySelector('[data-counter]');
    counter.innerText = ++counter.innerText;
  };
  if (event.target.dataset.action === 'minus') {
    const counterWrapper = event.target.closest('.counter-wrapper');
    const counter = counterWrapper.querySelector('[data-counter]');
    if (parseInt(counter.innerText) > 1) {
      counter.innerText = --counter.innerText;
    };
  };
});

const cartList = document.querySelector('.cart__list');
window.addEventListener('click', function (event) {
  if (event.target.hasAttribute('data-cart')) {
    const productCard = event.target.closest('.product-card');
    const productInfo = {
      id: productCard.dataset.id,
      imgSrc: productCard.querySelector('.product-card__img').getAttribute('src'),
      name: productCard.querySelector('.product-card__name').innerText,
      price: productCard.querySelector('.product-card__price').innerText,
      counter: productCard.querySelector('[data-counter]').innerText,

    };
    const cartItemHtml = `
      <li class="cart__item" data-id=${productInfo.id}>
        <img class="cart__img" src="${productInfo.imgSrc}" width="100" height="65" alt="ролл белый тигр">
        <div class="cart__box">
          <h3 class="cart__name">${productInfo.name}</h3>
          <div class="cart__wrapper">
              <div class="counter">
                <button class="counter__control" data-action="minus">-</button>
                <div class="counter__current" data-counter="">${productInfo.counter}</div>
                <button class="counter__control" data-action="plus">+</button>
              </div>
              <span class="cart__price">${productInfo.price}</span>
            </div>
        </div>
        <button class="cart__delite" type="submit">
          <svg class="cart__icon">
            <use xlink:href="images/sprite.svg#close-filters"></use>
          </svg>
        </button>
      </li>`;
    cartList.insertAdjacentHTML('beforeend', cartItemHtml);
  }
})