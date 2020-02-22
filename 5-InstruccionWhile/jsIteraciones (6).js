function mostrar()
{

  var contador=0 ;
  
	var acumulador= 0 ;



 



while (contador <= 5)            //se ejecuta 5 veces
{


var numero = prompt("Ingrese un numero") ;

numero = parseInt(numero) ;

acumulador = acumulador +1 ;


while(isNaN(numero)) {//este while busca solo validar un dato


numero = prompt("error!!,ingrese un numero!") ;

numero = parseInt(numero) ;
acomulador += numero;




}


 document.getElementById('suma').value=acumulador;

  document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN