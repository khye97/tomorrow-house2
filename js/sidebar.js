const sidebarMenuButton = document.querySelector('.gnb-icon-btn.is-menu');
const sidebar = document.querySelector('.sidebar');
const sidebarOverlay = document.querySelector('.overlay');

function openSidebar() {
  sidebar.classList.add('is-active');
  sidebarOverlay.classList.add('is-active');
}

sidebarMenuButton.addEventListener('click', openSidebar);

function closeSidebar() {
  if (sidebar.classList.contains('is-active')) {
    sidebar.classList.remove('is-active');
    sidebarOverlay.classList.remove('is-active');
  }
}

sidebarOverlay.addEventListener('click', closeSidebar);
