const orderCta = document.querySelector('.order-cta');
const [orderCtaBookmarkButton, orderCtaBuyButton] = orderCta.children;

const orderModal = document.querySelector('.order-form-modal');

const orderModalOverlay = document.querySelector('.overlay');

function openOrderModal() {
  orderModal.classList.add('is-open');
  orderModalOverlay.classList.add('is-active');
}

orderCtaBuyButton.addEventListener('click', openOrderModal);

function closeOrderModal() {
  orderModal.classList.remove('is-open');
  orderModalOverlay.classList.remove('is-active');
}

orderModalOverlay.addEventListener('click', closeOrderModal);

// const buyButton = document.querySelector('.order-cta .btn-primary.btn-48');
// const orderFormModal = document.querySelector('.order-form-modal');
// const orderFormModalOverlay = document.querySelector('.overlay');
// const orderFormCartButton = orderFormModal.querySelector(
//   '.btn-secondary.btn-48'
// );
// const cartModal = document.querySelector('.cart-modal');
// const cartModalCheckButton = cartModal.querySelector('.btn-secondary.btn-48');

// // 구매하기 버튼 누르면 order-form 열림
// buyButton.addEventListener('click', function () {
//   orderFormModal.classList.add('is-open');
//   orderFormModalOverlay.classList.add('is-active');
// });

// // order-form-modal의 장바구니 버튼 누르면 cart-modal 열림
// orderFormCartButton.addEventListener('click', function () {
//   orderFormModal.classList.remove('is-open');
//   cartModal.classList.add('is-active');
// });

// cartModalCheckButton.addEventListener('click', function () {
//   cartModal.classList.remove('is-active');
//   orderFormModalOverlay.classList.remove('is-active');
// });

// // 검은 화면 클릭했을 때 창 닫힘
// orderFormModalOverlay.addEventListener('click', function () {
//   if (cartModal.classList.contains('is-active')) {
//     return;
//   } else {
//     orderFormModal.classList.remove('is-open');
//     orderFormModalOverlay.classList.remove('is-active');
//   }
// });
