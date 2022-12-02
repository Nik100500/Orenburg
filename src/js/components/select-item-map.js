var itemsMap = document.querySelectorAll('.my-img__point')
var itemsList = document.querySelectorAll('.item__point')
var orenburgItems = document.querySelector('.content-orenburg__items');
function activeItem(itemActive) {
  itemsMap.forEach(item => {
    item.classList.remove('active')
    item.dataset.pointFilter == itemActive.dataset.pointFilter ? item.classList.add('active') : ''
  })

  itemsList.forEach(item => {
    item.classList.remove('active')
    item.dataset.pointFilter == itemActive.dataset.pointFilter ? 
    (item.classList.add('active'), orenburgItems.className.indexOf('hidden') == -1 ? item.scrollIntoView({ behavior: 'smooth'}) : '') 
    : ''
  })
  itemActive.classList.add('active')
}
itemsMap.forEach(item => {
  item.addEventListener('click', function () { activeItem(item); })
})
itemsList.forEach(item => {
  item.addEventListener('click', function () { activeItem(item); })
})