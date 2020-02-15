/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
 
var largoterreno ;

var anchoterreno ;

var radioterreno ;

largoterreno = document.getElementById("Largo").value ;

anchoterreno = document.getElementById("Ancho").value ;

radioterreno = document.getElementById("Radio").value ;

  
largoterreno = parseInt(largo) ;

anchoterreno = parseInt(ancho) ;

radioterreno = parseInt(radio) ;



function Rectangulo () 
{var alambre ;

    largoterreno = document.getElementById("Largo").value ;

    anchoterreno = document.getElementById("Ancho").value ;
    

    alambre = 3 *(largoterreno*2 + anchoterreno*2) ;//calculo de lados del rectangulo

  

    alert("la cantidad de alambre a comprar es de metros : " +alambre ) ;

   

    
}//resultado perfecto

function Circulo () 
{var alambre ;

    radioterreno = document.getElementById("Radio").value ;

    alambre = 3 * radioterreno * radioterreno * 3.14 ;//calculo del radio//  radio al cuadrado por pi

    alert("la cantidad de alambre a comprar es de metros : " +alambre) ;



    
}
function Materiales () 
{
 
var terrenoM2 ;

var material ; 

var cemento = 2 ;

var cal = 3 ;

 largoterreno = document.getElementById("Largo").value ;

 anchoterreno = document.getElementById("Ancho").value ;


  material = (cemento + cal) ;

  terrenoM2 = (largoterreno * anchoterreno) ;   //=metros cuadrados

  materiales = (material * terrenoM2) ;   

 

alert("la cantidad de material a comprar es de:" + materiales) ;




}


    //1MTRO CUADRADO = 2 CEMENTO Y 3 DE CAL//
    //AREA DEL RECTANGULO = BASE * ALTURA
    //MATERIALES MULTIPLICADOS POR METROS CUADRADOS


    
//TODO PERFECTO