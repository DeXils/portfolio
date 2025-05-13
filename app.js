window.onload = function() {
    setTimeout(() => {
        document.querySelectorAll(".text").forEach(el => el.style.display = "block");
        document.getElementById("terminal").classList.add("no-border");
    }, 600);
};

let terminal = document.getElementById('terminal');
let logoFrogInDev = document.getElementById('logoFrogInDev');
let pressStart = document.getElementById('pressStart');

// Écoute de l'événement 'keydown' pour détecter une touche pressée
window.addEventListener('keydown', function() {
    // Ajouter la classe "logo-frogindev" pour déclencher l'animation
    logoFrogInDev.classList.add('logo-frogindev');
	
	
    logoFrogInDev.classList.add('shrink');

    // Supprimer le texte "Press a key to start"
    pressStart.remove();

    // Supprimer l'écouteur après la première pression
    window.removeEventListener('keydown', arguments.callee);
});
