function mostrar()
{

	var contador=0;
	var acumulador=0;



  document.getElementById('suma').value=acumulador;
  document.getElementById('promedio').value=acumulador/5;



while (contador < 5)  //se ejecuta 5 veces
{//este whiule se encarga de ejecutar el bucle correctamente
contador ++ ;

var numero = prompt("Ingrese un numero") ;
 
numero = parseInt(numero) ;




while(isNaN(numero)) {//este while busca solo validar un dato


numero = prompt("error!!,ingrese un numero!") ;

numero = parseInt(numero) ;
acomulador += numero;




}




}//FIN DE LA FUNCIÓN