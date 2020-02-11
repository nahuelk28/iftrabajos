function mostrar()
{
//tomo la edad  
    var edad;
 
    edad=document.getElementById('edad').value;
    
    if(edad >18)
    {
       alert("sos un mayor");
    }else
    {
     	if(edad <13)
     	{
     	   alert("sos un niño");
     	}else
     	{
     	   alert("sos un adolescente");	
     	}


    }








}     