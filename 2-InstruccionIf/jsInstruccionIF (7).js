function mostrar()
{
//tomo la edad  
 var edad
  var estadocivil

  edad = document.getElementById("edad").value;

  estadocivil = document.getElementById("estadoCivil").value;
  
    
  if (edad<18 && estadoCivil != "Soltero")
   {
    
 
//if (estadocivil != "Soltero") {

    alert("usted es muy pequeño para no ser soltero");
     }

    
}

 

//FIN DE LA FUNCIÓN
