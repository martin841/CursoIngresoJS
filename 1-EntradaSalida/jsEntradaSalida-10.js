/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var precio = prompt("indique el precio");
    var descuento = prompt("indique el porcentaje de descuento");
    var preciocuidado = (precio-descuento*precio/100); 
    //todavia no se cuanto vale preciocuidado,no se define la variable
   // var resultado = (preciocuidado-precio);


    precio = parseInt(precio);
    descuento = parseInt(descuento);

    precio = document.getElementById(precio);
    descuento = document.getElementById(descuento);

    alert(preciocuidado);

    
}
