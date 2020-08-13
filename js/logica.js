var producto = document.querySelector("#producto");

for (var i = 0; i <5; i++) {
	producto.insertAdjacentElement('afterend', producto.cloneNode(true));

}
