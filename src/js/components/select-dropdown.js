// Change option selected

const label = document.querySelector('.dropdown__filter-selected.company')
const options = Array.from(document.querySelectorAll('.dropdown__select-option.company'))


// Change option value

options.forEach((option) => {
	option.addEventListener('click', () => {
		label.textContent = option.textContent
	})
})

// Close dropdown onclick outside

document.addEventListener('click', (e) => {
	const toggle = document.querySelector('.dropdown__switch.company')
	const element = e.target

	if (element == toggle) return;

	const isDropdownChild = element.closest('.dropdown__filter.company')	
	const dropdownItem = document.querySelector('.dropdown.company')
	// dropdownItem.classList.toggle("active")	
	
	if (!isDropdownChild) {
		toggle.checked = false
		dropdownItem.classList.remove("active")	
	} else dropdownItem.classList.toggle("active")	
})


//lang selector

const labelLang = document.querySelector('.dropdown__filter-selected.lang')
const optionsLang = Array.from(document.querySelectorAll('.dropdown__select-option.lang'))
optionsLang.forEach((option) => {
	option.addEventListener('click', () => {
		labelLang.textContent = option.textContent
	})
})

document.addEventListener('click', (e) => {
	const toggle = document.querySelector('.dropdown__switch.lang')
	const element = e.target

	if (element == toggle) return;

	const isDropdownChild = element.closest('.dropdown__filter.lang')		
	
	/* if (!isDropdownChild) {
		toggle.checked = false
	} */
})

// Platforms selector

const labelPlatforms = document.querySelector('.dropdown__filter-selected.platforms')
const optionsPlatforms = Array.from(document.querySelectorAll('.dropdown__select-option.platforms'))
optionsPlatforms.forEach((option) => {
	option.addEventListener('click', () => {
		labelPlatforms.textContent = option.textContent
	})
})

document.addEventListener('click', (e) => {
	const toggle = document.querySelector('.dropdown__switch.platforms')
	const element = e.target

	if (element == toggle) return;

	const isDropdownChild = element.closest('.dropdown__filter.platforms')		
	
	/* if (!isDropdownChild) {
		toggle.checked = false
	} */
})

// Statuses selector

const labelStatuses = document.querySelector('.dropdown__filter-selected.statuses')
const optionsStatuses = Array.from(document.querySelectorAll('.dropdown__select-option.statuses'))
optionsStatuses.forEach((option) => {
	option.addEventListener('click', () => {
		labelStatuses.textContent = option.textContent
	})
})

document.addEventListener('click', (e) => {
	const toggle = document.querySelector('.dropdown__switch.statuses')
	const element = e.target

	if (element == toggle) return;

	const isDropdownChild = element.closest('.dropdown__filter.statuses')		
	
	/* if (!isDropdownChild) {
		toggle.checked = false
	} */
})