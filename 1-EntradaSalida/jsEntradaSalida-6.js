/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{ 
    var num1 = prompt("ingrese el numero a sumar");
    var num2 = prompt("ingrese el numero a sumar")
    var Suma = (num1+num2);


    num1 = parseInt(num1);
    num2 = parseInt(num2);


    alert("el valor de la suma es:"+ Suma);


   num1 = document.getElementById(num1);
   num2 = document.getElementById(num2);

   //porque el resultado de 2+5 por ej,da 25?// sera porque el valor de la variable
   //esta puesta en prompt(segun lo que indique el usuario)//y eso no tiene valor numerico? o que
   //
   
}