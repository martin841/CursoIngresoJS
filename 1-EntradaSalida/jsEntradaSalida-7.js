/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	var num1 = prompt("indique el numero a sumar");
    var num2 = prompt("indique el numero a sumar");
    var suma = (num1+num2);
    
    num1 = parseInt(num1); 
    num2 = parseint(num2);

    alert("el resultado de la suma es de"+suma);

num1 = document.getElementById(num1);
num2 = document.getElementById(num2);
//NO MUESTRA EL RESULTADO DE LA SUMA POR ALERT//

}

function restar()
{
    var num3 = prompt("numero de resta");
    var num4 = prompt("numero de resta");
    var resta = (num3-num4);


    num3 = parseint(num3);
    num4 = parseint(num4);

    alert("el resultado de la resta es de" + resta);

    num3 = document.getElementById(num3);
    num4 = document.getElementById(num4);

    //NO MUESTRA RESULTADO POR ALERT//
}

function multiplicar()
{  
    var num5 = prompt("el numero a multiplicar");
    var num6 = prompt("el numero a multiplicar");
    var multiplicacion = (num5*num6);
    

    num5 = parseint(num5);
    num6 = parseint(num6);

    num5 = document.getElementById(num5);
    num6 = document.getElementById(num6);

    alert("el resultado de la operacion es de" +multiplicacion);

    //NO SE MUESTRA RESULTADO POR ALERT//
}

function dividir()
{
    var num7 = prompt("coloque un numero a dividir")
    var num8 = prompt("coloque el divisor");
    var division = (num7/num8);

    num7 = parseint(num7);
    num8 = parseint(num8);

    alert("el resultado de la division es de"+division);

    num7 = document.getElementById(num7);
    num8 = document.getElementById(num8);

     
    //NO SE MUESTRA RESULTADO POR ALERT//
}

