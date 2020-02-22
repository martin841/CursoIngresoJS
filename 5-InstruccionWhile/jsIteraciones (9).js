function mostrar()
{// declarar variables

	//plantar bandera = var flag = false ;
	
	var contador = 0 ;
	
	 var numero ;
	 
	 var maximo = 0 ;
	 
     var minimo = 100 ;

	var respuesta ='si';

	while(respuesta != 'si')      //AGREGADO=DO WHILE HACE,PRIMERO,LUEGO EVALUA 

	{

		numero=prompt("ingrese un numero:") ;
		numero = parseInt(numero) ;

if(contador == 0)
{

maximo = numero ;
minimo = numero ;

}
else{ 
	   if  (maximo > minimo)
	   {
maximo = numero ;

	   }
	   
	      else{  
             
				  if  (numero < minimo) {
					  
                       minimo = numero ;

				                         }

	          }  
	

       }
	




		respuesta = prompt("desea ingresar otro numero?") ; //si decis que no,while da FALSO y se termina el ciclo
        //respuesta = respuesta.toLowerCase() ; //convierte lo que se ponga lo escrito para abajo en prompt a minuscula


	
//SI EN LA CONDICION WHILE COLOCAMOS TRUE O FALSE,EN LUGAR DE PROMPT COLOCAMOS CONFIRM();ACEPTAR O CANCELAR)//





	}
}

document.getElementById("maximo").value = maximo


}//FIN DE LA FUNCIÓN