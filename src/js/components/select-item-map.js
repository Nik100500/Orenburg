var itemsMap = document.querySelectorAll('.my-img__point')
var itemsList = document.querySelectorAll('.item__point')
var orenburgItems = document.querySelector('.content-orenburg__items');
var orskItems = document.querySelector('.content-orsk__items');
function activeItem(itemActive, mapItems) {
  console.log(mapItems)
  itemsMap.forEach(item => {
    item.classList.remove('active')
    item.dataset.pointFilter == itemActive.dataset.pointFilter ? item.classList.add('active') : ''
  })

  itemsList.forEach(item => {
    item.classList.remove('active')
    item.dataset.pointFilter == itemActive.dataset.pointFilter ? 
    (item.classList.add('active'), mapItems.className.indexOf('hidden') == -1 ? item.scrollIntoView({ behavior: 'smooth'}) : '') 
    : ''
  })
  itemActive.classList.add('active')
}
itemsMap !== null ? itemsMap.forEach(item => {
  item.addEventListener('click', function () { activeItem(item, orenburgItems !== null ? orenburgItems : orskItems !== null ? orskItems : ""); })
}) : ""
itemsList !== null ? itemsList.forEach(item => {
  item.addEventListener('click', function () { activeItem(item, orenburgItems !== null ? orenburgItems : orskItems !== null ? orskItems : ""); })
}) : ""