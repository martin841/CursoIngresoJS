/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var precio = document.getElementById(importe).value;

    var descuento = document.getElementById(resultado).value;

    var preciocuidado 
    


    precio = parseInt(precio);
    descuento = parseInt(descuento);

   preciocuidado = (precio-descuento*precio/100); 

    alert(preciocuidado);

    
}
//completar
