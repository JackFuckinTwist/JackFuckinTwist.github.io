
document.getElementById("platos-btn").click();




var tabs = document.getElementsByClassName('Tab');

Array.prototype.forEach.call(tabs, function(tab) {
	tab.addEventListener('click', setActiveClass);
});

function setActiveClass(evt) {
	Array.prototype.forEach.call(tabs, function(tab) {
		tab.classList.remove('active');
	});
	
	evt.currentTarget.classList.add('active');
}




function openTab(evt, tabName) {
    var i, tablita;
    tablita = document.getElementsByClassName("tablita");
    for (i = 0; i < tablita.length; i++) {
        tablita[i].style.display = "none";
    }
    
    document.getElementById(tabName).style.display = "block";
        
}


function openFoto(evt, fotoName) {
    var i, fachadaBig;
    fachadaBig = document.getElementsByClassName("fachadaBig");
    for (i = 0; i < fachadaBig.length; i++) {
        fachadaBig[i].style.display = "none";
    }
    
    document.getElementById(fotoName).style.display = "block";
        
}



