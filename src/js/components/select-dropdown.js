// Change option selected

const options = Array.from(document.querySelectorAll('.dropdown__select-option.company'))

// Change option value
if (options.length) {
	const label = document.querySelector('.dropdown__filter-selected.company')
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
}


//lang selector

const optionsLang = Array.from(document.querySelectorAll('.dropdown__select-option.lang'))

if (optionsLang.length) {
	const labelLang = document.querySelector('.dropdown__filter-selected.lang')
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
	})
	
}

// Platforms selector

const optionsPlatforms = Array.from(document.querySelectorAll('.dropdown__select-option.platforms'))

if (optionsPlatforms.length) {
	const labelPlatforms = document.querySelector('.dropdown__filter-selected.platforms')

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
	})
 }

// Statuses selector

const optionsStatuses = Array.from(document.querySelectorAll('.dropdown__select-option.statuses'))

if (optionsPlatforms.length) {
	
	const labelStatuses = document.querySelector('.dropdown__filter-selected.statuses')

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
}