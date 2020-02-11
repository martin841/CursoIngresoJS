/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
//caja de dialogo,metodo prompt

var nombre

nombre = document.getElementById("nombre");


nombre = prompt("hola cual es tu nombre");


alert("bienvenido" + nombre);

}


