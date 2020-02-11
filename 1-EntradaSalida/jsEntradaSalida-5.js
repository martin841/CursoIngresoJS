/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{   
    var nombre
    var edad
    var union

    nombre = "su nombre es martin";
    edad = "y tiene 24 años de edad";
    union = (nombre + edad);

    nombre = document.getElementById("nombre");
    edad = document.getElementById("edad");

    alert (union);


}