/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{   
    var nombre  
    var edad
    var union

    
 nombre = document.getElementById("elNombre").value;
    edad = document.getElementById("laEdad").value;


    nombre = "su nombre es" + nombre;
    edad = "y tiene" + edad ;
    union = (nombre + edad);

    
    alert(union);


}