function showLarge(e){
	document.getElementById("lg").src = e.target.src;
}

function init(){
	let smalls = document.querySelectorAll(".sm img");
	for(let i=0; i<smalls.length; i++){
		smalls[i].onclick = showLarge;
	}
}

window.addEventListener("load", init, false);