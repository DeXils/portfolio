window.onload = function() {
    setTimeout(() => {
        document.querySelectorAll(".text").forEach(el => el.style.display = "block");
        document.getElementById("terminal").classList.add("no-border");
    }, 600);
};

let terminal = document.getElementById('terminal');
let logoFrogInDev = document.getElementById('logoFrogInDev');
let columnTerminal = document.getElementById('columnTerminal');
let pressStart = document.getElementById('pressStart');

// Écoute de l'événement 'keydown' pour détecter une touche pressée
window.addEventListener('keydown', function() {
    // Ajouter la classe "logo-frogindev" pour déclencher l'animation
    logoFrogInDev.classList.add('logo-frogindev');
	columnTerminal.classList.add('column-terminal');

    // Supprimer le texte "Press a key to start"
    pressStart.remove();

    // Supprimer l'écouteur après la première pression
    window.removeEventListener('keydown', arguments.callee);
	
	startComputer();
});


function startComputer() {
    let memoryTest = 640;

    const columnStart = document.createElement('div');
    columnStart.classList.add('column-start');
    columnTerminal.appendChild(columnStart);

    const copyrightIntelSpan = document.createElement('span');
    copyrightIntelSpan.innerText = "Copyright © 2025, DeXils\n(LGA1851) Intel Core Ultra 9\n\n CPU Speed at 5,7 GHz";
    copyrightIntelSpan.classList.add('column-terminal-span');
    columnStart.appendChild(copyrightIntelSpan);

    const memorySpeedTestSpan = document.createElement('span');
    memorySpeedTestSpan.classList.add('column-terminal-span');
    columnStart.appendChild(memorySpeedTestSpan);

    let i = 0;

    const memoryInterval = setInterval(() => {
        if (i >= 51) {
            clearInterval(memoryInterval);
            return;
        }

        if (i === 50) {
            memoryTest += 128;
        } else {
            memoryTest += 640;
        }

        memorySpeedTestSpan.innerText = `Memory Test : ${memoryTest}K OK`;
        i++;
    }, 25);
	
	const ramTestSpan = document.createElement('span');
	ramTestSpan.innerHTML = "<br>Detecting potential error :<br>&nbsp;- Ram install ? Yes | 1 slot remaining" 
	ramTestSpan.classList.add('column-terminal-span');
    columnStart.appendChild(ramTestSpan);
}

