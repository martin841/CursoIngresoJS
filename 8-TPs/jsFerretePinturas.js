/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var temperatura ;  

    var convertida ;

    temperatura = document.getElementById("Temperatura").value ;

    temperatura = parseInt(temperatura) ;

    convertida = (temperatura - 32) / 1.8 ;

          alert("la temperatura ingresada en farenheit,en centigrados son : " + convertida) ;



}

function CentigradosFahrenheit () 
{var convertida ;

    temperatura = document.getElementById("Temperatura").value;

    temperatura = parseInt(temperatura) ;

    convertida = (temperatura * 9) / 5 + 32 ;

          alert("la temperatura ingresada en centigrados,en farenheit son : " + convertida) ;


}
