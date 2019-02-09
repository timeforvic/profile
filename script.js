let about = document.getElementById("about");

about.addEventListener("click", whenClicked);
about.addEventListener("mouseover", whenHovered);
about.addEventListener("mouseout", whenNotHovered);

let bodyArray = document.getElementsByTagName("BODY");
let body = bodyArray[0];

function whenClicked(){
	let newHeading = document.createElement("h1");
	newHeading.innerHTML = "Yurr";
	newHeading.style.color = "red";
	newHeading.style.fontSize = "100px";
	about.appendChild(newHeading);
}

function whenHovered(){
    body.style.color = "orange";
}
function whenNotHovered(){
	body.style.color = "lightgreen";

}
