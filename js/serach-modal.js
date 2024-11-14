const searchModal = document.querySelector('.search-modal');
const searchOverlay = document.querySelector('.overlay');
const searchButton = document.querySelector('.gnb-icon-btn.is-search');
const searchModalCloseButton = searchModal.querySelector(
  '.search-modal-form button'
);

function openSearchModal() {
  searchModal.classList.add('is-active');
  searchOverlay.classList.add('is-active');
}

searchButton.addEventListener('click', openSearchModal);

function closeSearchModal() {
  searchModal.classList.remove('is-active');
  searchOverlay.classList.remove('is-active');
}

searchModalCloseButton.addEventListener('click', closeSearchModal);
