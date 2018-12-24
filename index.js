const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked"
function click() {
	title.classList.toggle(CLICKED_CLASS)
}

function init() {
	title.addEventListener("click",click)
}

init()