
const filters = document.querySelectorAll('.filter');
let selectedFilter = 'all'
let selectedFilter2 = 'all'
var eventsPage = document.querySelectorAll('events__main__content')
filters.forEach(filter => {
  filter.addEventListener('click', function() {
    filters.forEach(filter => {
      filter.classList.remove("active");
    });
    selectedFilter = filter.getAttribute('data-filter');
    filter.classList.add("active");
    let itemsToHide = [];
    let itemsToShow = [];
    if (selectedFilter == 'all') {
      itemsToShow = document.querySelectorAll('.projects [data-filter]');
    } else {
      itemsToHide = document.querySelectorAll(`.projects .project:not([data-filter='${selectedFilter}'])`);
      itemsToShow = document.querySelectorAll(`.projects [data-filter='${selectedFilter}']`);
    }

    /* itemsToShow.forEach(el => {
      let secondFilter = el.getAttribute('data-filter2')
      if (secondFilter == selectedFilter2 || selectedFilter2 == 'all') {
        el.classList.remove('hide');
        el.classList.add('show');
      }
    });
    itemsToHide.forEach(el => {
      let secondFilter = el.getAttribute('data-filter2')
      if (secondFilter !== selectedFilter2) {
        el.classList.add('hide');
        el.classList.remove('show');
      }
    }); */
    itemsToShow.forEach(el => {
      let secondFilter = el.getAttribute('data-filter2')
      if (secondFilter == selectedFilter2 || selectedFilter2 == 'all') {
        el.classList.remove('hide');
        el.classList.add('show');
      }
    });
    itemsToHide.forEach(el => {
      el.classList.add('hide');
      el.classList.remove('show');
    });
    var elementsShowed = document.querySelectorAll('.show')
    if (eventsPage) {
      for (var i = 0; i < elementsShowed.length; i++) {
        if (i == 0 || i == 1 || i %  5 == 0 || i % 6 == 0) {
          elementsShowed[i].style.height="511px"
          elementsShowed[i].style.width="calc(50% - 14px)"
        } else {
          elementsShowed[i].style.height="488px"
          elementsShowed[i].style.width="calc(33.333% - 19px)"
        }
      }
    }
  });
});

const filters2 = document.querySelectorAll('.filter2');

filters2.forEach(filter => {

  filter.addEventListener('click', function() {
    selectedFilter2 = filter.getAttribute('data-filter2');
    // filter.classList.add("active");
    let itemsToHide = [];
    let itemsToShow = [];
    if (selectedFilter2 == 'all') {
      itemsToShow = document.querySelectorAll('.projects [data-filter2]');
    } else {
      itemsToHide = document.querySelectorAll(`.projects .project:not([data-filter2='${selectedFilter2}'])`);
      itemsToShow = document.querySelectorAll(`.projects [data-filter2='${selectedFilter2}']`);
    }
    /* itemsToShow.forEach(el => {
      let secondFilter = el.getAttribute('data-filter')
      if (secondFilter == selectedFilter || selectedFilter == 'all') {
        el.classList.remove('hide');
        el.classList.add('show');
      }
    });
    itemsToHide.forEach(el => {
      let secondFilter = el.getAttribute('data-filter')
      if (secondFilter !== selectedFilter) {
        el.classList.add('hide');
        el.classList.remove('show');
      }
    }); */
    itemsToShow.forEach(el => {
      let secondFilter = el.getAttribute('data-filter')
      if (secondFilter == selectedFilter || selectedFilter == 'all') {
        el.classList.remove('hide');
        el.classList.add('show');
      }
    });
    itemsToHide.forEach(el => {
      el.classList.add('hide');
      el.classList.remove('show');
    });
    var elementsShowed = document.querySelectorAll('.show')
    if (eventsPage) {
      for (var i = 0; i < elementsShowed.length; i++) {
        if (i == 0 || i == 1 || i %  5 == 0 || i % 6 == 0) {
          elementsShowed[i].style.height="511px"
          elementsShowed[i].style.width="calc(50% - 14px)"
        } else {
          elementsShowed[i].style.height="488px"
          elementsShowed[i].style.width="calc(33.333% - 19px)"
        }
      }
    }
  });
});
