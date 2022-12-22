
  var buttonPcSidebarOpen = document.getElementById("buttonPcSidebarOpen"),
  buttonPcSidebarClose = document.getElementById("buttonPcSidebarClose"),
  subButtonPcSidebarClose = document.getElementById("subButtonPcSidebarClose"),
             container = document.querySelector(".page__body")
function openMenu() {
 container.classList.add("open-sidebar-menu");
}
function closeMenu() {
 container.classList.remove("open-sidebar-menu");
}
buttonPcSidebarOpen ? buttonPcSidebarOpen.addEventListener('click', ()=> openMenu()) : ''
buttonPcSidebarClose ? buttonPcSidebarClose.addEventListener('click', ()=> closeMenu()) : ''
subButtonPcSidebarClose ? subButtonPcSidebarClose.addEventListener('click', ()=> closeMenu()) : ''