var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidthm, 
       itemsMap = document.querySelectorAll('.my-img__infrastructure')

function activeItem(itemActive) {
  itemsMap.forEach(item => {
    item.className.indexOf('active') !== -1 ? 
    (item.dataset.infrastructureFilter == itemActive.dataset.infrastructureFilter ? item.classList.toggle('active') : 
      item.classList.remove('active')) : (item.dataset.infrastructureFilter == itemActive.dataset.infrastructureFilter ? 
      item.classList.toggle('active') : 
    item.classList.remove('active'))
  })
}
itemsMap !== null ? itemsMap.forEach(item => {
  item.querySelector(".infrastructure-item__icon").addEventListener('click', function () { activeItem(item) })
}) : ""