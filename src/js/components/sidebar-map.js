                
  var orenburgItems = document.querySelector('.content-orenburg__items');
  var orskItems = document.querySelector('.content-orsk__items');
  if (orenburgItems !== null) {
    var orenburgItemsButton = document.querySelector('.content-orenburg__items-button');
    var orenburgItemsOverlay = document.querySelector('.content-orenburg__items-overlay');
    function hideOrenburgItems() {
      orenburgItems.classList.toggle('hidden');
      orenburgItemsOverlay.classList.toggle('hidden');
      setTimeout(() => {
        orenburgItemsOverlay.classList.toggle('animation-hidden');
      }, 250);
    }
    orenburgItemsButton.addEventListener('click', hideOrenburgItems)
    orenburgItemsOverlay.addEventListener('click', hideOrenburgItems)
  } else if (orskItems !== null) {
    var orskItemsButton = document.querySelector('.content-orsk__items-button');
    var orskItemsOverlay = document.querySelector('.content-orsk__items-overlay');
    function hideOrskItems() {
      orskItems.classList.toggle('hidden');
      orskItemsOverlay.classList.toggle('hidden');
      setTimeout(() => {
        orskItemsOverlay.classList.toggle('animation-hidden');
      }, 250);
    }
    orskItemsButton.addEventListener('click', hideOrskItems)
    orskItemsOverlay.addEventListener('click', hideOrskItems)

  }