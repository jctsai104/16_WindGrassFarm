function showLarge(e){
	document.getElementById("large").src = e.target.src;
}

function init(){
	let smalls = document.querySelectorAll(".smallPic img");
	for(let i=0; i<smalls.length; i++){
		smalls[i].onclick = showLarge;
	}
}

window.addEventListener("load", init, false);