/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 var Edad ; 

 var Sexo ;

 var EstadoCivil ;

 var Sueldo ;

 var Legajo ;

 var Nacionalidad ;







 Edad = document.getElementById("Edad").value ; 

 Sexo =  document.getElementById("Sexo").value ;

 EstadoCivil =  document.getElementById("EstadoCivil").value ;

 Sueldo =  document.getElementById("Sueldo").value ;

 Legajo =  document.getElementById("Legajo").value ;

 Nacionalidad =  document.getElementById("Nacionalidad").value ;







 /*Edad = parseInt(edad) ;

 Sueldo = parseInt(sueldo) ;
 
 Legajo = parseInt(legajo) ;*/






  //EDAD//

 Edad = prompt("ingrese su edad:") ;

 if (Edad > 18 && Edad <= 90 ) {

    alert("dato valido") ;

 } 
 else 
 { 


        alert("edad mal ingresado");
     }
    



                          //SEXO//

 Sexo = prompt("Ingrese M para masculino y F para femenino") ;

     if (Sexo == M) {

        alert("dato valido") ;
    
     } 
     else  { 
    
         if (Sexo == F) 
         { 
             alert("dato valido") ;
         
           }
         
         
        else {
    
            alert("sexo mal ingresado") ;
         }
        }
    





                    // ESTADO CIVIL//

 EstadoCivil = prompt("ingrese 1,2,3 o 4:") ;

 if (EstadoCivil == 1) {

    alert("dato valido") ;
 } 

 else  { 

     if (EstadoCivil == 2) {

        alert("dato valido")
     
       }
     
    else  {    
         
        if (EstadoCivil == 3)
        { 
           alert("dato valido")
        } 
            else  { 
           
                if (EstadoCivil == 4) {

                   alert("dato valido");
                                     }
     else{
        alert("estado civil mal ingresado");
      }

     }

   }
 
 }






                          //SUELDO//

Sueldo = prompt("ingrese su sueldo:") ;

if (Sueldo > 8000) {

    alert("dato valido") ;
 } 
 else{ 

alert("sueldo bruto muy bajo") ;

 }





                    //LEGAJO//

Legajo = prompt("ingrese su numero de legajo:") ;


if (Legajo >999) {

    alert("dato valido") ;
}


 else{ 
     alert("nro de legajo mayor a cuatro cifras,sin zeros a la izquierda") ;

 }
                     








//NACIONALIDAD//

Nacionalidad = prompt("ingrese su Nacionalidad: A si es argentino,E si es extranjero y N si es nacionalizado") ;

 if (Nacionalidad == A) {

    alert("dato valido") ;
 } 

 else { 

     if (Nacionalidad == E) { 

         alert("dato valido") ;

       }
  

     else { 
         
        if (Nacionalidad ==N ) {
         alert("dato valido");
     }
     
     else {

        alert("nacionalidad mal ingresada,seleccione : A,E,N");
     }

    }
}

}
//FIN//






