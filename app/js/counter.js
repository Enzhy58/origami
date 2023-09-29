//Подсчет общей стоимости товаров в корзине
function calcCartPrice() {
    const cartItems = document.querySelectorAll('.cart__item');
    const totalPriceEl = document.querySelector('.cart__result-number');
  
    let totalPrice = 0;
  
    cartItems.forEach(function (item) {
      const amountEl = item.querySelector('[data-counter]');
      const priceEl = item.querySelector('.cart__price');
      const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
      totalPrice += currentPrice;
    });
    totalPriceEl.innerText = totalPrice;
  }
  
  //Счетчик товаров
  window.addEventListener('click', function (event) {
  
    let counter;
  
    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
      const counterWrapper = event.target.closest('.counter-wrapper');
      counter = counterWrapper.querySelector('[data-counter]');
    }
  
    if (event.target.dataset.action === 'plus') {
      counter.innerText = ++counter.innerText;
    };
    if (event.target.dataset.action === 'minus') {
      if (parseInt(counter.innerText) > 1) {
        counter.innerText = --counter.innerText;
      } else if (event.target.closest('.cart__list') && parseInt(counter.innerText) === 1) {
        event.target.closest('.cart__item').remove();
        calcCartPrice();
      }
    };
    if (event.target.hasAttribute('data-action') && event.target.closest('.cart__list')) {
      calcCartPrice();
    }
  });
  
  //Добавление товаров в корзину
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
  
      const itemInCart = cartList.querySelector(`[data-id="${productInfo.id}"]`);
      if (itemInCart) {
        const counterElement = itemInCart.querySelector('[data-counter]');
        counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
      } else {
  
        const cartItemHtml = `
        <li class="cart__item" data-id=${productInfo.id}>
          <img class="cart__img" src="${productInfo.imgSrc}" width="100" height="65" alt="${productInfo.name}">
          <div class="cart__box">
            <h3 class="cart__name">${productInfo.name}</h3>
            <div class="cart__wrapper">
              <div class="counter counter-wrapper">
                <button class="counter__control" data-action="minus" type="button">-</button>
                <div class="counter__current" data-counter>${productInfo.counter}</div>
                <button class="counter__control" data-action="plus" type="button">+</button>
              </div>
              <span class="cart__price">${productInfo.price}</span>
            </div>
          </div>
        </li>`;
        cartList.insertAdjacentHTML('beforeend', cartItemHtml);
      }
      productCard.querySelector('[data-counter]').innerText = '1';
      calcCartPrice();
    }
  });