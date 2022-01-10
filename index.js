const retour = document.querySelector(".RetourEnHaut");

window.addEventListener("scroll", ()=>{

    if (window.pageYOffset>100){
        retour.classList.add("active");
    } else {
        retour.classList.remove("active");

    }
})


var fleche = document.getElementById('deroulant');

fleche.addEventListener('click', function(e){

    
})