var nombre = document.getElementById('nombre');
var apellido = document.getElementById('apellido');
var direccion = document.getElementById('direccion');
var ccusuario = document.getElementById('ccusuario');
var ccpaswd = document.getElementById('ccpaswd');
var ccpaswdValidate = document.getElementById('ccpaswdValidate');
var email = document.getElementById('email');
var error = document.getElementById('error')

function enviarFormulario(){
	var mensajesError = [];

	if(nombre.value === null || nombre.value === ''){
		mensajesError.push('Ingrese el nombre');
	}
	
	if(nombre.value.length > 25){
		mensajesError.push('El nombre no debe exceder los 25 caracteres');
	}
	if(apellido.value === null || apellido.value === ''){
		mensajesError.push('Ingrese el Apellido');
	}

	if(apellido.value.length > 25){
		mensajesError.push('El apellido no debe exceder los 25 caracteres');
	}
	if(email.value === null || email.value === ''){
		mensajesError.push('Ingrese el Email');
	}

	if(email.value.length > 120){
		mensajesError.push('El email no debe exceder los 120 caracteres');
	}

	direccion = direccion.value
	direccion = direccion.toLowerCase();//convierte la dirección a letras minusculas para poder validar sin discriminar mayusculas 
	var val =0;

	if(direccion.startsWith('cll') || direccion.startsWith('cra') || direccion.startsWith('av') || direccion.startsWith('anv') || direccion.startsWith('trans')){
		val = 1;
	}

	if(val === 0){
		mensajesError.push('Direccion no valida, esta debe comenzar en Cll, Cra, Av, Anv, o Trans')
	}

	error.innerHTML = mensajesError.join(', ')

	return false;
}