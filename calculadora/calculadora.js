var num1;
var num2;
var num3;
var virg=false,num1cheio=false;
var devoapagar=false
var operador= '?';
var ms=false;

function limpa(){
	document.getElementById("visor").value=0;
	virg = false;
	num1 = 0;
	num2 = 0
	operador = '?';
}

function memorystore(){
	if (!ms) {
		num3 = document.getElementById("visor").value;
		ms=true;
		document.getElementById("bms").value="mr";
			if (num3==0) {
				num3 = 0;
				document.getElementById("bms").value="ms";
				ms=false;}
			}
		else if (ms) {
			document.getElementById("visor").value = num3;
		ms=false;
		document.getElementById("bms").value="ms";
		}
}

function memoryclear(){
	num3 = 0;
	document.getElementById("bms").value="ms";
	ms=false;
}

function memorymais(){
num3 = parseFloat(num3) + parseFloat(document.getElementById("visor").value);
if (num3==0) {
	num3 = 0;
	document.getElementById("bms").value="ms";
	ms=false;
}
}

function memorymenos(){
num3 = parseFloat(num3) - parseFloat(document.getElementById("visor").value);
if (num3==0) {
	num3 = 0;
	document.getElementById("bms").value="ms";
	ms=false;}
}


function aleatorio(){
	document.getElementById("visor").value = Math.random();
}

function porcento(){
	var porcent = parseFloat(document.getElementById("visor").value)
	
	document.getElementById("visor").value = num1*(porcent/100);;
	virg = false;
}

function maismenos(){
	document.getElementById("visor").value=document.getElementById("visor").value*-1;
}

function barraxis(){
	document.getElementById("visor").value=1/document.getElementById("visor").value;
}

function N(nume){
	if (devoapagar){
		zerador();}
	document.getElementById("visor").value=(document.getElementById("visor").value+nume)*1;
	num1cheio=false;
}

function tanh(){
	document.getElementById("visor").value=Math.tanh(document.getElementById("visor").value)
}

function sinh(){
	document.getElementById("visor").value=Math.sinh(document.getElementById("visor").value)
}

function cosh(){
	document.getElementById("visor").value=Math.cosh(document.getElementById("visor").value)
}

function rad(){
	document.getElementById("visor").value=Math.PI * (document.getElementById("visor").value) / 180
}



function elevado2(){
document.getElementById("visor").value = Math.pow(document.getElementById("visor").value, 2);
}

function elevado3(){
document.getElementById("visor").value = Math.pow(document.getElementById("visor").value, 3);
}

function elevado10(){
document.getElementById("visor").value = Math.pow(10, document.getElementById("visor").value);
if (document.getElementById("visor").value<0) {
	virg=false;}	
}

function elevadoy(){
document.getElementById("visor").value = Math.pow(num1, document.getElementById("visor").value);
}

function elevadoeuler(){
document.getElementById("visor").value = Math.pow(Math.E, document.getElementById("visor").value);
}


function sqrt(){
	document.getElementById("visor").value = Math.sqrt(document.getElementById("visor").value, 2);
}

function cbcrt(){
	document.getElementById("visor").value = Math.sqrt(document.getElementById("visor").value, 3);
}

function yrt(){
	document.getElementById("visor").value = Math.sqrt(num1, document.getElementById("visor").value);
}


function logarithm(){
	document.getElementById("visor").value = Math.log(document.getElementById("visor").value);
}

function logarithm10(){
	document.getElementById("visor").value = Math.log10(document.getElementById("visor").value);
}

function fatorial() {
var fato = document.getElementById("visor").value;
	for (var i = fato - 1; i >= 1; i--) {
    fato = fato * i;}
    document.getElementById("visor").value = fato;
}

function seno(){

}

function coseno(){}
function tangente(){}
function euler(){}

function coco(cocozim){
	document.getElementById("bnada").value+=cocozim;
}

function virgula(){
	if (!virg) {
	document.getElementById("visor").value+='.';
	virg = true;}
}

function pi(){
document.getElementById("visor").value=Math.PI;
virg=true;

}

function backspace(){
	document.getElementById("visor").value = document.getElementById("visor").value.substring(0, document.getElementById("visor").value.length - 1);
	if (document.getElementById("visor").value == '') {
document.getElementById("visor").value = 0;
	}
}

function mais(){
	virg=false;
	if (!num1cheio) {
		num1 = document.getElementById("visor").value;
		operador = '+';
		num1cheio=true;
		document.getElementById("visor").value=0;}
		else if(num1cheio) {
			if (operador=='+') {
				num2 = document.getElementById("visor").value;
				num1 = parseFloat(num1) + parseFloat(num2);
				document.getElementById("visor").value = num1;
				num2 = 0;
			}
			if (operador=='-') {
				num2 = document.getElementById("visor").value;
				num1 = parseFloat(num1) - parseFloat(num2);
				document.getElementById("visor").value = num1;
				num2 = 0;
			}
			if (operador=='*') {
				num2 = document.getElementById("visor").value;
				num1 = parseFloat(num1) * parseFloat(num2);
				document.getElementById("visor").value = num1;
				num2 = 0;
			}
			if (operador=='/') {
				num2 = document.getElementById("visor").value;
				num1 = parseFloat(num1) / parseFloat(num2);
				document.getElementById("visor").value = num1;
				num2 = 0;
			}

		}
}

function menos(){
	virg=false;
	if (!num1cheio) {
		num1 = document.getElementById("visor").value;
		operador = '-';
		num1cheio=true;
		document.getElementById("visor").value=0;}
		else if(num1cheio) {
			if (operador=='+') {
				num2 = document.getElementById("visor").value;
				num1 = parseFloat(num1) + parseFloat(num2);
				document.getElementById("visor").value = num1;
				num2 = 0;
			}
			if (operador=='-') {
				num2 = document.getElementById("visor").value;
				num1 = parseFloat(num1) - parseFloat(num2);
				document.getElementById("visor").value = num1;
				num2 = 0;
			}
			if (operador=='*') {
				num2 = document.getElementById("visor").value;
				num1 = parseFloat(num1) * parseFloat(num2);
				document.getElementById("visor").value = num1;
				num2 = 0;
			}
			if (operador=='/') {
				num2 = document.getElementById("visor").value;
				num1 = parseFloat(num1) / parseFloat(num2);
				document.getElementById("visor").value = num1;
				num2 = 0;
			}

		}
}

function vezes(){
	virg=false;
	if (!num1cheio) {
		num1 = document.getElementById("visor").value;
		operador = '*';
		num1cheio=true;
		document.getElementById("visor").value=0;}
		else if(num1cheio) {
			if (operador=='+') {
				num2 = document.getElementById("visor").value;
				num1 = parseFloat(num1) + parseFloat(num2);
				document.getElementById("visor").value = num1;
				num2 = 0;
			}
			if (operador=='-') {
				num2 = document.getElementById("visor").value;
				num1 = parseFloat(num1) - parseFloat(num2);
				document.getElementById("visor").value = num1;
				num2 = 0;
			}
			if (operador=='*') {
				num2 = document.getElementById("visor").value;
				num1 = parseFloat(num1) * parseFloat(num2);
				document.getElementById("visor").value = num1;
				num2 = 0;
			}
			if (operador=='/') {
				num2 = document.getElementById("visor").value;
				num1 = parseFloat(num1) / parseFloat(num2);
				document.getElementById("visor").value = num1;
				num2 = 0;
			}
		}
}

function dividido(){
	virg=false;
	if (!num1cheio) {
		num1 = document.getElementById("visor").value;
		operador = '/';
		num1cheio=true;
		document.getElementById("visor").value=0;}
		else if(num1cheio) {
			if (operador=='+') {
				num2 = document.getElementById("visor").value;
				num1 = parseFloat(num1) + parseFloat(num2);
				document.getElementById("visor").value = num1;
				num2 = 0;
			}
			if (operador=='-') {
				num2 = document.getElementById("visor").value;
				num1 = parseFloat(num1) - parseFloat(num2);
				document.getElementById("visor").value = num1;
				num2 = 0;
			}
			if (operador=='*') {
				num2 = document.getElementById("visor").value;
				num1 = parseFloat(num1) * parseFloat(num2);
				document.getElementById("visor").value = num1;
				num2 = 0;
			}
			if (operador=='/') {
				num2 = document.getElementById("visor").value;
				num1 = parseFloat(num1) / parseFloat(num2);
				document.getElementById("visor").value = num1;
				num2 = 0;
			}

		}
}

function igual(){
		virg=false;
	if (operador=='+') {
				num2 = document.getElementById("visor").value;
				num1 = parseFloat(num1) + parseFloat(num2);
				document.getElementById("visor").value = num1;
				num2 = 0;
			}
			if (operador=='-') {
				num2 = document.getElementById("visor").value;
				num1 = parseFloat(num1) - parseFloat(num2);
				document.getElementById("visor").value = num1;
				num2 = 0;
			}
			if (operador=='*') {
				num2 = document.getElementById("visor").value;
				num1 = parseFloat(num1) * parseFloat(num2);
				document.getElementById("visor").value = num1;
				num2 = 0;
			}
			if (operador=='/') {
				num2 = document.getElementById("visor").value;
				num1 = parseFloat(num1) / parseFloat(num2);
				document.getElementById("visor").value = num1;
				num2 = 0;
			}
				}
			
		

	

