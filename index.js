const title = document.querySelector("#title");
function click() {
	const currentClassName = title.className;
if (currentClassName !== "clicked"){
title.className = "clicked"	
}
}

function init() {
	title.addEventListener("click",click)
}

init()

console.log(title.className)