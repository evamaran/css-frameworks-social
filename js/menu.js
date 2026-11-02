// hamburger menu toggle
const toggleBtn = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const hamburgerIcon = document.getElementById('hamburger-icon');
const closeIcon = document.getElementById('close-icon');

toggleBtn.addEventListener('click', () => {
	const isOpen = mobileMenu.classList.toggle('hidden');

	// Check to make sure elemements exist on the page
	if (isOpen) {
		hamburgerIcon.classList.remove('hidden');
		closeIcon.classList.add('hidden');
	} else {
		hamburgerIcon.classList.add('hidden');
		closeIcon.classList.remove('hidden');
	}
});