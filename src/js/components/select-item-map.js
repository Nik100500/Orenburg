var  orenburgItems = document.querySelector('.content-orenburg__items'),
          itemsMap = document.querySelectorAll('.my-img__point'),
         itemsList = document.querySelectorAll('.item__point'),
         orskItems = document.querySelector('.content-orsk__items'),
       windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth

function activeItem(itemActive, mapItems) {
  console.log(mapItems)
  itemsMap.forEach(item => {
    item.classList.remove('active')
    item.dataset.pointFilter == itemActive.dataset.pointFilter ? item.classList.add('active') : ''
  })

  itemsList.forEach(item => {
    item.classList.remove('active')
    item.dataset.pointFilter == itemActive.dataset.pointFilter ? 
    (item.classList.add('active'), mapItems.className.indexOf('hidden') == -1 ?  windowWidth > 640 ? item.scrollIntoView({ behavior: 'smooth'}) : '' : '') 
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