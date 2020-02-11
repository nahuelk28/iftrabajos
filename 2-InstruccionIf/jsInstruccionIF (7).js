function mostrar()
{
//tomo la edad  
    var edad;
    var estadiCivil;

    edad=document.getElementById('edad').value;
    estadiCivil=document.getElementById('estadoCivil').value;

    if(edad <18 && estadoCivil !="soltero")
    {
    	alert("es muy pequeño para NO ser soltero")
    }
	


}//FIN DE LA FUNCIÓN