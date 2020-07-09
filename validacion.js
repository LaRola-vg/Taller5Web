var nombre = document.getElementById('nombre');
var apellido = document.getElementById('apellido');
var direccion = document.getElementById('direccion');
var ccusuario = document.getElementById('ccusuario');
var ccpaswd = document.getElementById('ccpaswd');
var email = document.getElementById('email');

function enviarFormulario(){
	var mensajesError = [];

	if(nombre.value === null || nombre.value === ''){
		mensajesError.push('Ingrese el nombre');
	}

	return false;
}