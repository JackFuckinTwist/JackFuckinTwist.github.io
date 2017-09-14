




var logo = document.getElementById("logo") ;
    var container = document.getElementById("container-nav-respons-id");
var iconos = document.getElementById("iconos-redes");

function dropdown() {
    
    if (container.className === "container-nav-respons") {
        container.className += " container-nav-responsdown";
        logo.style.opacity = "0"; 
    iconos.style.marginLeft = "20.0342vw";
    }
    
    else {
        container.className = "container-nav-respons";
        logo.style.opacity = "1";
        iconos.style.marginLeft = "-12vw";
        
    }
    
    
    
    
    
    
    
    
    
    
}