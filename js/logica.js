var producto = document.querySelector("#producto");
var linkProducto = document.querySelector("#linkProducto");
var linkArtesania = document.querySelector("#linkArtesania");

for (var i = 0; i <5; i++) {
	producto.insertAdjacentElement('afterend', producto.cloneNode(true));

}


linkProducto.onclick = function() {
	var productosRopa = document.querySelectorAll("#producto");
	//alert("Acabas de presionar Producto");
	
	for(var i = productosRopa.length-1; i > 0; i--){
		productosRopa[i].remove();
	}

	producto.querySelector(".photo").src="images/imagen1.png";
	producto.querySelector("#tituloProducto").innerText="Calza Frizada Talle 1 al 6";
	producto.querySelector("#precioProducto").innerText="$500";

	for (var i = 0; i <5; i++) {
	producto.insertAdjacentElement('afterend', producto.cloneNode(true));
	}
	
}

linkArtesania.onclick = function() {
	//alert("Acabas de presionar Artesania");
	var productosArtesania = document.querySelectorAll("#producto");
	for(var i = productosArtesania.length-1; i > 0; i--){
		productosArtesania[i].remove();
	}

	producto.querySelector(".photo").src="images/producto2.png";
	producto.querySelector("#tituloProducto").innerText="Caja de Madera";
	producto.querySelector("#precioProducto").innerText="$350";

	for (var i = 0; i <5; i++) {
	producto.insertAdjacentElement('afterend', producto.cloneNode(true));

}
	
}
