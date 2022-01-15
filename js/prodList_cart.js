let btnMinus, btnPlus, qtyBox;
function changeQty(i, qty) {
    let newQty = parseInt(qtyBox[i].value) + qty;
    if(newQty < 0){
        newQty = 0;
    }
    qtyBox[i].value = newQty;
}


window.addEventListener("load", function(){
    btnMinus = document.getElementsByClassName("btnMinus");
    btnPlus = document.getElementsByClassName("btnPlus");
    qtyBox = document.getElementsByClassName("qtyBox");

    for(let i=0; i<btnMinus.length; i++){
        btnMinus[i].onclick = function () {
            changeQty(i , -1);
        }
        btnPlus[i].onclick = function () {
            changeQty(i , +1);
        }
    }
})