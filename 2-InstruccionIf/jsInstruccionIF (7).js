function mostrar()
{
//tomo la edad  
 var edad
 var estadocivil
 //var soltero
 

  edad = document.getElementById("edad").value;
  estadocivil = document.getElementById("estadoCivil").value;
  soltero = document.getElementById("Soltero").value;
    
  if (edad <=18 && estadocivil == "Soltero") {
    
 
//if (estadocivil != "Soltero") {

    alert("usted es muy pequeño para no ser soltero");
}
else { alert("usted es muy pequeño para no ser soltero");
    
}

 

}//FIN DE LA FUNCIÓN