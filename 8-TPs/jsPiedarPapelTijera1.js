/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;

function comenzar()

 var numero
 
 numero =Math.floor(Math.random() * 10) + 1;

 //numero = parseInt(Math.random()*3 +1);

var eleccionMaquina =document.getElementById("FormIngreso").value;

var resultado1 = "ganas"  ;

var resultado2 =  "empatas" ;

var resultado3 = "pierdes" ;








//COMO LE ASIGNO CADA NUMERO A LA IMAGEN,SIN ID




/*
//acceder a botonera
{   var ingreso = document.getElementById("FormIngreso").value;

//generacion de numero random

        var numero ;
  	    
        numero = parseInt (Math.random()*3);
    
        alert(numero);

}



function piedra()
{
    if (ingreso == 1) {

        alert("usted escogio piedra");
    
    }
	

}//FIN DE LA FUNCIÓN




function papel()
{
    if (ingreso == 2) {

    alert("usted escogio papel");
                       }

}//FIN DE LA FUNCIÓN



function tijera()
{
	if (ingreso == 3) {

        alert("usted escogio tijera"); }

}//FIN DE LA FUNCIÓN*/