function validateForm()                                    
{ 
    var name = document.forms["myForm"]["name"];               
    var email = document.forms["myForm"]["email"];    
    var message = document.forms["myForm"]["message"];   
   
    if (name.value == "")                                  
    { 
        document.getElementById('errorname').innerHTML="Veuillez entrez un nom valide";  
        name.focus(); 
        return false; 
    }else{
        document.getElementById('errorname').innerHTML="";  
    }

    if (prenom.value == "")                                  
    { 
        document.getElementById('errorprenom').innerHTML="Veuillez entrez un prénom valide";  
        prenom.focus(); 
        return false; 
    }else{
        document.getElementById('errorprenom').innerHTML="";  
    }

    if (tel.value == "")                                  
    { 
        document.getElementById('telfail').innerHTML="Veuillez entrez un téléphone valide";  
        tel.focus(); 
        return false; 
    }else{
        document.getElementById('telfail').innerHTML= "";  
    }
       
    if (email.value == "")                                   
    { 
        document.getElementById('erroremail').innerHTML="Veuillez entrez une adresse mail valide"; 
        email.focus(); 
        return false; 
    }else{
        document.getElementById('erroremail').innerHTML="";  
    }
   
    if (email.value.indexOf("@", 0) < 0)                 
    { 
        document.getElementById('erroremail').innerHTML="Veuillez entrez une adresse mail valide"; 
        email.focus(); 
        return false; 
    } 
   
    if (email.value.indexOf(".", 0) < 0)                 
    { 
        document.getElementById('erroremail').innerHTML="Veuillez entrez une adresse mail valide"; 
        email.focus(); 
        return false; 
    } 
   
    if (message.value == "")                           
    {
        document.getElementById('errormsg').innerHTML="Veuillez entrez un besoin valide"; 
        message.focus(); 
        return false; 
    }else{
        document.getElementById('errormsg').innerHTML="";  
    }
   
    return true; 
}