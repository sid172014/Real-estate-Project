document.addEventListener("DOMContentLoaded",function (event){ 	//We are intialising this EventListener to avoid the situation where we we have to link our javascript inside the index.html document at the very last or above the </body> tag by doing this we can link the script.js file inside the head tag	
var cartItems = 0;
var totalPrice = 0;
function sayHello(event){
	cartItems++;
	document.querySelector("#cart").textContent = "(" + cartItems+")";
	totalPrice = totalPrice + parseInt(this.value);
	this.textContent = "Added to Cart";
}

// Unobstrive Event Binding
document.querySelector("#button1").addEventListener("click",sayHello);
document.querySelector("#button2").addEventListener("click",sayHello);
document.querySelector("#button3").addEventListener("click",sayHello);
document.querySelector("#button4").addEventListener("click",sayHello);
document.querySelector("#button5").addEventListener("click",sayHello);
document.querySelector("#button6").addEventListener("click",sayHello);
document.querySelector("#button7").addEventListener("click",sayHello);
document.querySelector("#button8").addEventListener("click",sayHello);
document.querySelector("#button9").addEventListener("click",sayHello);
});