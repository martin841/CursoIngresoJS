/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto ; 

var contadorIntentos ;

var random ;

function comenzar()
{ 
random 

random = (Math.random() * 100) ;

numeroSecreto = document.getElementById("numero").value ;
  
}

function verificar()
{
	if (random == numerosecreto) {

    alert("JUEGO TERMINADO,GANASTE!!!") ;
  } 
  
  else {

    contadorintentos=document.getElementById("intentos").value ;

    contadorIntentos != true (+1) ;//COMO IR SUMANDO 1 POR CADA INTENTO FALLIDO QUE PASE POR ELSE

    contadorIntentos = parseInt(contador) ;

    alert("sumas uno huevon");
  }
	
}//NO HACE NADA
