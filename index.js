const title = document.querySelector("#title");
function click() {
	const hasClassClicked = title.classList.contains("clicked");
	console.log(hasClassClicked);
if (!hasClassClicked){
	title.classList.add("clicked");
}
else{
	title.classList.remove("clicked");
}
}

function init() {
	title.addEventListener("click",click)
}

init()

console.log(title.className)