$(function(){
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

  $('.product-item__list').slick({
    dots: false,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/product-prev.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/icons/product-next.svg" alt=""></button>',
  });

  $('.product-tabs__top-items').on('click', function (e) {
    e.preventDefault();
    $('.product-tabs__top-items').removeClass('product-tabs__top-items--active');
    $(this).addClass('product-tabs__top-items--active');

    $('.product-tabs__content-items').removeClass('product-tabs__content-items--active');
    $($(this).attr('href')).addClass('product-tabs__content-items--active');
  });

  $(".product-item__stars, .reviews__stars").rateYo({
    rating: 4,
    starWidth: "16px",
    normalFill: "#C1C1C1",
    ratedFill: "#FFB800",
    spacing: "6px"
  });

  var mixer = mixitup('.categories__list');
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
