                
  var orenburgItems = document.querySelector('.content-orenburg__items');
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
  }