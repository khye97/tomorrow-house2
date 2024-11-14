// storeBtn.addEventListener('click', function () {
//   const store = document.querySelector('.drawer-menu.is-store')
//   if (open == false) {
//     store.classList.add('is-active')
//     store.classList.add('is-open')
//     open = true
//   } else {
//     store.classList.remove('is-active')
//     store.classList.remove('is-open')
//     open = false
//   }
// })

// ----------------------------------------

// const drawerMenuList = document.querySelectorAll('.drawer-menu')
// let arr = Array.from(drawerMenuList)

// arr.map((item) => {
//   item.addEventListener('click', function () {
//     item.classList.toggle('is-open')
//     item.classList.toggle('is-active')
//   })
// })

// -------------------------------------------
// 강사 코드
const drawerMenuButtonList = document.querySelectorAll('.drawer-menu-btn')

function toggleDrawerMenu() {
  const drawerMenu = this.parentNode
  drawerMenu.classList.toggle('is-open')
  drawerMenu.classList.toggle('is-active')
}

drawerMenuButtonList.forEach(function (item) {
  item.addEventListener('click', toggleDrawerMenu)
})
