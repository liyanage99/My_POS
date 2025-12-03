let tot=0;
function addToCart(name,price){
    tot+=price;
    localStorage.setItem('name',tot)
}
window.onload = function(){
    let tot = localStorage.getItem('name',tot) || 0;
    document.getElementById("total").textContent = "Total - Rs." + tot + "/=";
}