function mostrar()
{
//tomo la edad  

var edad

edad = document.getElementById("edad").value;


//CONDICIONES//

if (edad >= 18)
{
alert("ustes es mayor de edad");    
} 

if (edad >13 &&  edad <= 17) {

    alert ("usted es adolescente");
}

if (edad <= 13)

{ alert("usted es un niño"); }


}//FIN DE LA FUNCIÓN

