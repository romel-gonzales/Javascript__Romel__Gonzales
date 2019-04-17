var operadora = -1;
var operadorb = -1;
var operacion = -1;
var valorPantalla = -1

function cambiarSizeTecla(elemento){
	console.log("Valor id seleccionado: "+elemento.id);

		var valorPrevio = document.getElementById('display').innerHTML;
		var valorPantalla = document.getElementById('display').innerHTML
		var contienePunto = valorPantalla.toString().includes(".");
				
		if(valorPrevio == '0' && elemento.id == 'mas')
		{
			return;
		}	
		else if(valorPrevio == '0' && elemento.id == 'menos')
		{
			return;
		}
		else if(valorPrevio == '0' && elemento.id == 'por')
		{
			return;
		}		
		else if(valorPrevio == '0' && elemento.id == 'dividido')
		{
			return;
		}
		else if(valorPrevio == '0' && elemento.id == 'raiz')
		{
			return;
		}	
		else if(valorPrevio == '0' && elemento.id == 'punto')
		{
			document.getElementById('display').innerHTML = "0.";
			return;
		}	
		else if(valorPrevio == '-' && elemento.id == 'sign')
		{
			document.getElementById('display').innerHTML = "0";
			return;
		}
		else if(contienePunto && elemento.id == "punto")
		{
			return;
		}			
	
		if(elemento.id == 'igual')
		{
			operadorb = document.getElementById('display').innerHTML;
			calcular();
			return;
		}
		if(elemento.id == 'on')
		{
			limpiar();
			return;
		}	
		if(elemento.id == 'sign')
		{
			document.getElementById('display').innerHTML = "-";
			return;
		}
		
		var valorActual = elemento.id;
		
		console.log("Cantidad de digitos en pantalla: "+document.getElementById('display').innerHTML.length);
					
		if(valorPrevio == "0" && valorActual != ".")
		{
			console.log("valorPrevio= "+valorPrevio+" -------  valorActual= "+valorActual);
			valorPrevio = valorPrevio.replace("0", "");
			document.getElementById('display').innerHTML = valorPrevio + valorActual;
		}
		else
		{	
			if(valorActual == 'mas')
			{
				valorActual = '+';
				operacion = valorActual;
				operadora = document.getElementById('display').innerHTML;
				document.getElementById('display').innerHTML = "";					
				return;
			}
			else if(valorActual == 'menos')
			{
				valorActual = '-';		
				operacion = valorActual;
				operadora = document.getElementById('display').innerHTML;
				document.getElementById('display').innerHTML = "";									
				return;
			}
			else if(valorActual == 'por')
			{
				valorActual = '*';		
				operacion = valorActual;
				operadora = document.getElementById('display').innerHTML;
				document.getElementById('display').innerHTML = "";														
				return;
			}
			else if(valorActual == 'dividido')
			{
				valorActual = '/';		
				operacion = valorActual;
				operadora = document.getElementById('display').innerHTML;
				document.getElementById('display').innerHTML = "";											
				return;
			}
			else if(valorActual == 'punto')
			{
				valorActual = '.';		
				//operacion = valorActual;			
				document.getElementById('display').innerHTML = ".";									
			}	
		}
				
		if(document.getElementById('display').innerHTML.length > 7 && operandob == '-1' && operacion == '-1')
		{
			operandoa = document.getElementById('display').innerHTML;
			return;
		}
		else if(document.getElementById('display').innerHTML.length > 7 && operandoa != '-1'  && operandob == '-1')
		{
			operandob = document.getElementById('display').innerHTML;
			return;
		}			
		
		document.getElementById('display').innerHTML = valorPrevio + valorActual;
		
		elemento.style.height = "75px";
		if(elemento.id == 'mas')
		{
			elemento.style.height = "150px";
		}		
}	

function calcular()
{
	console.log("Estoy en Funcion Calcular");
	var resultado = -1;
	var operar;

	if (operacion == '+') {
		operar = operadora +operacion+ operadorb;
		console.log("Operaciona realizar: "+operar);
		resultado = eval(operar);
		if(resultado.toString().length > 8)
		{
			resultado = resultado.toString().substring(0,8)
		}		
		document.getElementById("display").innerHTML = resultado;
		operadora, operadorb = -1;		
	} else if (operacion == '-') {
		operar = operadora +operacion+ operadorb;
		console.log("Operaciona realizar: "+operar);
		resultado = eval(operar);
		if(resultado.toString().length > 8)
		{
			resultado = resultado.toString().substring(0,8)
		}		
		document.getElementById("display").innerHTML = resultado;
		operadora, operadorb = -1;				
	} else if (operacion == '/') {
		operar = operadora +operacion+ operadorb;
		console.log("Operaciona realizar: "+operar);
		resultado = eval(operar);
		console.log("Ancho de resultado de division: "+resultado.toString().length);
		if(resultado.toString().length > 8)
		{
			resultado = resultado.toString().substring(0,8)
		}		
		document.getElementById("display").innerHTML = resultado;
		operadora, operadorb = -1;			
	} else if (operacion == '*') {
		operar = operadora +operacion+ operadorb;
		console.log("Operaciona realizar: "+operar);
		resultado = eval(operar);
		if(resultado.toString().length > 8)
		{
			resultado = resultado.toString().substring(0,8)
		}			
		document.getElementById("display").innerHTML = resultado;
		operadora, operadorb = -1;		
	}	
}

function limpiar()
{
	document.getElementById("display").innerHTML = "0";
}


function reducirSizeTecla(elemento){
	elemento.style.height = "64px";
		if(elemento.id == 'mas')
	{
		elemento.style.height = "140px";
	}
}


var Calculadora = {
	init: function(){
		//document.getElementById('display').innerHTML = ' ';
		this.asignarEventoTecla('tecla');
	},
	
	asignarEventoTecla: function(selector){
		
		var botonPagina = document.getElementsByClassName(selector);
		for (var i = 0; i < botonPagina.length; i++) {
			botonPagina[i].onmousedown = this.eventoCambioTamanio;
			botonPagina[i].onmouseup = this.eventoReducirTamanio;
		}
	},

	eventoCambioTamanio: function(event){
		cambiarSizeTecla(event.target);
	},

	eventoReducirTamanio: function(event){
		reducirSizeTecla(event.target);
	},
	
	eventoDeterminarOperacion: function(event){
			console.log("Valor id seleccionado: "+event.target);
	}
	
}

Calculadora.init();