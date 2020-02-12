function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;


switch(mesDelAño){

    case "julio":
    
          alert("!Abrigate que hace frio!");
    break;
    
    case "Agosto":
    
          alert("Abrigate que hace frio!");
    break;



        case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":

            alert("Falta para el invierno");
            
			break;

		default:
			alert("Ya pasamos el frio, ahora calor!!!")	//si son seleccionados septiembre,octubre,noviembre y diciembre//
    }
    

}//FIN DE LA FUNCIÓN