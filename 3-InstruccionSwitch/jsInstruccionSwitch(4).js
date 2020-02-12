function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	
    switch(mesDelAño){


 case "Febrero":

  alert("este mes tiene 29 dias");
  
  break;

  case "Abril":
  case "Mayo":
  case"Junio":
  case "Septiembre":
  case "Noviembre":

   alert ("este mes tiene 30 dias")


break;

      default:

 alert("este mes tiene31 dias");

}

}//FIN DE LA FUNCIÓN