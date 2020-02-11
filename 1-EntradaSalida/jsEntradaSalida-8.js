/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
    var dividendo = prompt("marque el numero a dividir");
    var divisor = prompt("marque el numero divisor"); 
    var resto = (dividendo%divisor);

    dividendo = parseInt(dividendo);
    divisor = parseInt(divisor);


alert("el resto de la division es el nro" +resto);

dividendo = document.getElementById(dividendo);
divisor = document.getElementById(divisor);

//division sale bien y muestra el resultado por pantalla por alert,PERO como hacer que muestre el resto//

}
