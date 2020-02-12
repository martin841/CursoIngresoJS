function mostrar()
{
 //tomo la edad  
                

 var edad  

  	edad = document.getElementById("edad").value; 

 	if (edad > 17)

 	{
 		alert("es mayor");
 	}

 	else
//METODO DE ANIDACION
 	{ 
 		if (edad <13 ) 

 		{
 			alert("es un niño");
 		}

 		else

 		{
 			alert("es adolecente");
        }

    }

}//FIN DE LA FUNCIÓN

