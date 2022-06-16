/* Open menu */
let searcMenu = document.querySelector("#menu"),
	searchPageName = document.querySelector(".page_name");

	searcMenu.addEventListener('click', () => {
	document.querySelector("#menu").classList.toggle("menu-open");
	document.querySelector("body").classList.toggle("hidden");
});

	searchPageName.addEventListener('click', ()=> {
	document.querySelector("#menu").classList.toggle("menu-open");
	document.querySelector("body").classList.toggle("hidden");
});