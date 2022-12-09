var listItemsPreview = document.querySelector('.list-items-container');
if (listItemsPreview !== null) {
  var stepButtonsPreview = document.querySelectorAll('.step-button-preview');
  // stepButtonsPreview.forEach(function (item) {
  //   item.addEventListener('click', function (e) {
  //     e.preventDefault();
  //   })
  // })
  // function listMath(i) {
  //   var index = i
  //   console.log(index);
  //   listItemsPreview.style.transform = "translateY(" + -165*(i-1) + "px)"
  // }
  // for (var i = 0; i < stepButtonsPreview.length; i++) {
  //   stepButtonsPreview[i].addEventListener('click', ()=> listMath(i));
  // }
  // stepButtonsPreview.forEach(function (item) {
  //     var index = 0
  //     item.addEventListener('click', () => listMath(index))
  //     index = index + 1
  // })

  function activeItem(itemActive) {
    stepButtonsPreview.forEach(item => {
      console.log(itemActive.dataset.stepFilter)
      item.classList.remove('active')
      item.dataset.stepFilter == itemActive.dataset.stepFilter ? 
      (item.classList.add('active'), listItemsPreview.style.transform = "translateY(" + -180*(itemActive.dataset.stepFilter) + "px)")
      : ''
    })
    itemActive.classList.add('active')
  }
  // itemsMap !== null ? itemsMap.forEach(item => {
  //   item.addEventListener('click', function () { activeItem(item) })
  // }) : ""
  stepButtonsPreview !== null ? stepButtonsPreview.forEach(item => {
    item.addEventListener('click', function () { activeItem(item) })
  }) : ""
}