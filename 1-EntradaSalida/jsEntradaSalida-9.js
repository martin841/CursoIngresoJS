/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{  
    //variables

  var sueldo = prompt("sueldo");

  var porcentaje = prompt("porcentaje");

  var sueldomasaumento = (porcentaje*sueldo/100);
 //IDEA DE LA REGLA DE 3 SIMPLES
 
 
 
 //habilitar la toma de nros enteros//

    sueldo = parseint(sueldo);

    porcentaje = parseint(porcentaje);

    //resultado por alert
 
    alert("el porcentaje del 10% del sueldo es de" +sueldomasaumento);

    //validar

    sueldo = document.getElementById(sueldoneto);
    porcentaje = document.getElementById(porcentaje);
//NO MUESTRA EL RESULTADO NI POR ALERT,para que sirve el value,en que afecta?

}
