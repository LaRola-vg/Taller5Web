var nombre = document.getElementById('nombre');
var apellido = document.getElementById('apellido');
var direccion = document.getElementById('direccion');
var ccusuario = document.getElementById('ccusuario');
var ccpaswd = document.getElementById('ccpaswd');
var ccpaswdValidate = document.getElementById('ccpaswdValidate');
var email = document.getElementById('email')

function show(){
	document.getElementById("act").hidden = false;
}

function enviarFormulario(){

	if(nombre.value === null || nombre.value === ''){
		alert('Ingrese el nombre');
	}
	
	if(nombre.value.length > 25){
		alert('El nombre no debe exceder los 25 caracteres');
	}

	if(apellido.value === null || apellido.value === ''){
		alert('Ingrese el Apellido');
	}

	if(apellido.value.length > 25){
		alert('El apellido no debe exceder los 25 caracteres');
	}

	if(email.value === null || email.value === ''){
		alert('Ingrese el Email');
	}

	if(email.value.length > 120){
		alert('El email no debe exceder los 120 caracteres');
	}

	direccion = direccion.value
	direccion = direccion.toLowerCase();//convierte la dirección a letras minusculas para poder validar sin discriminar mayusculas 
	var val =0;

	if(direccion.startsWith('cll') || direccion.startsWith('cra') || direccion.startsWith('av') || direccion.startsWith('anv') || direccion.startsWith('trans')){
		val = 1;
	}

	if(val === 0){
		alert('Dirección no válida, esta debe comenzar en Cll, Cra, Av, Anv, o Trans')
	}

	var ccusrval = 0;

	if(ccusuario.value === null || ccusuario.value === ''){
		alert('Ingrese la cédula del usuario');
	}
	else{
		if (ccusuario.value.length > 20) {
			alert('El campo ccusuario no debe exceder los 20 caracteres');
		}else{
			if(ccusuario.value.length < 15){
				alert('El campo ccusuario debe tener por lo menos 15 caracteres');
			}else{
				for(var i=0; i<ccusuario.value.length; i++){
					var x = ccusuario.value.charCodeAt(i)
					if(x < 65 || x > 90){
						if(x<97 || x>122){
							if(x<48 || x>57){
								ccusrval = 1;
							}
						}
					}
				}
				if(ccusrval==1){
					alert('El campo ccusuario solo debe contener letras o numeros')
				}
			}
		}
	}

	var ccpaswdval =0;
	var ccpaswdcontMayus =0; //contador de letras mayusculas de la contraseña
	var ccpaswdcontMinus =0; //contador de letras minusculas de la contraseña
	var ccpaswdcontNum =0; //contador de numeros de la contraseña

	if(ccpaswd.value === null || ccpaswd.value === ''){
		alert('Ingrese la contraseña');
	}
	else{
		if (ccpaswd.value.length > 20) {
			alert('La contraseña no debe exceder los 20 caracteres');
		}else{
			if(ccpaswd.value.length < 10){
				alert('La contraseña debe tener por lo menos 10 caracteres');
			}else{
				for(var i=0; i<ccpaswd.value.length; i++){
					var x = ccpaswd.value.charCodeAt(i)//AQUI SE OBTIENE EL VALOR EN CODIGO ASCCI DE CADA CARACTER
					if(x < 65 || x > 90){
						if(x<97 || x>122){
							if(x<48 || x>57){
								if(x == 35 || x == 37 || x == 47 || x == 38){
									ccpaswdval = 0;
								}
								else{
									ccpaswdval = 1;
								}
							}
						}
					}
					if(x >= 65 && x <= 90){
						ccpaswdcontMayus=ccpaswdcontMayus+1;
					}
					if(x >= 97 && x <= 122){
						ccpaswdcontMinus=ccpaswdcontMinus+1;
					}
					if(x>=48 || x<=57){
						ccpaswdcontNum=ccpaswdcontNum+1;
					}
				}
				if(ccpaswdval==1){
					alert('La contraseña solo debe contener letras, números o los caracteres: #, /, &, %')
				}
				if(ccpaswdcontNum==0 || ccpaswdcontMayus==0 || ccpaswdcontMinus==0){
					alert('La contraseña debe contener al menos una letra mayúscula, una minúscula y un número (opcionalmente también los caracteres: #, /, &, %)')
				}
			}
		}
	}

	if(ccpaswd.value != ccpaswdValidate.value){
		alert('Las contraseñas no coinciden')
	}
	return false;
}
