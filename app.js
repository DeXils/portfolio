let terminal = document.getElementById('terminal');
let logoFrogInDev = document.getElementById('logoFrogInDev');
let columnTerminal = document.getElementById('columnTerminal');
let pressStart = document.getElementById('pressStart');
let terminalMod = document.getElementById('terminalMod');
let inputTerminal = document.getElementById('inputTerminal');

let startSound = new Audio("./sound/start.mp3");
let startCompleteSound = new Audio("./sound/startComplete.mp3");
let navigateSound = new Audio("./sound/navigate.mp3");
let enterSound = new Audio("./sound/enter.mp3");
let rickRollSound = new Audio("./sound/rick-roll.mp3");

let columnTerminalUser;
let selectedIndex = 0;
let options = [];
let terminalInputPath = document.getElementById('terminalInputPath')
let welcomeTerminal;
isTerminalMod = false;
let currentState = 'menu'; // 'menu', 'projects', 'presentation', 'skills', 'contact'

window.onload = function() {
    setTimeout(() => {
        document.querySelectorAll(".text").forEach(el => el.style.display = "block");
        document.getElementById("terminal").classList.add("no-border");
    }, 600);
};

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
	//showTerminal();
});


function startComputer() {
    startSound.play();
    let memoryTest = 640;
    let dataToInstall = 0;

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
            displayRamTest();
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

    function displayRamTest() {
        const ramTestSpan = document.createElement('span');
        ramTestSpan.classList.add('column-terminal-span');
        columnStart.appendChild(ramTestSpan);

        const tests = [
            {question: "&nbsp;- Ram install ?", answer: "Yes | 1 slot remaining<br>"},
            {question: "&nbsp;- Graphic card install ?", answer: "Yes<br>"},
            {question: "&nbsp;- Audio system install ?", answer: "Yes<br>"},
            {question: "&nbsp;- Data OK ?", answer: "No"}
        ];

        let index = 0;

        function showTest() {
            if (index >= tests.length) {
                displayInstallData();
                return;
            }

            ramTestSpan.innerHTML += tests[index].question;

            setTimeout(() => {
                ramTestSpan.innerHTML += " " + tests[index].answer;
                index++;
                setTimeout(showTest, 500);
            }, 500);
        }

        showTest();
    }

    function displayInstallData() {
        const installDataSpan = document.createElement('span');
        installDataSpan.classList.add('column-terminal-span');
        columnStart.appendChild(installDataSpan);

        let progress = 0;

        const downloadInterval = setInterval(() => {
            if (progress >= 100) {
                clearInterval(downloadInterval);
                installDataSpan.innerText = `Data Install From DeXilsCore : 100% - Complete`;
                setTimeout(() => {
                    columnStart.remove();
                    showSystemConfiguration();
                }, 1000);
                return;
            }

            progress += Math.floor(Math.random() * 5) + 1; // Augmente entre 1 et 5%
            if (progress > 100) progress = 100;

            installDataSpan.innerText = `Data Install From DeXilsCore : ${progress}%`;
        }, 100);
    }
}

function showSystemConfiguration() {
    const columnStart = document.createElement('div');
    columnStart.classList.add('column-start');
    columnTerminal.appendChild(columnStart);

    const tableConfiguration = document.createElement('div');
    tableConfiguration.classList.add('table-configuration');
    columnStart.appendChild(tableConfiguration);

    const dexilsPU = document.createElement('span');
    dexilsPU.classList.add('column-terminal-span');
    dexilsPU.innerHTML =
        "&nbsp;&nbsp;&nbsp;DeXilsPU Type &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;DeXils2025-A&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Base Memory&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;640K<br>"   +
        "&nbsp;&nbsp;&nbsp;Co-Processor &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;FrogInDev138&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Extended Memory&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;31744K<br>" +
        "&nbsp;&nbsp;&nbsp;DeXilsPU Clock &nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;144MHz&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cache Memory&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;None"
    tableConfiguration.appendChild(dexilsPU);

    const ramDrive = document.createElement('span');
    ramDrive.style.borderTop = '2px solid #00ff00';
    ramDrive.style.paddingTop = '5px';
    ramDrive.style.marginTop = '5px';
    ramDrive.classList.add('column-terminal-span');
    ramDrive.innerHTML =
        "&nbsp;&nbsp;&nbsp;Ram Card A&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;32 Go, DDR4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Speed Memomry&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;3600 MHz<br>" +
        "&nbsp;&nbsp;&nbsp;Ram Card B&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;32 Go, DDR4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Speed Memomry&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;3600 MHz<br>" +
        "&nbsp;&nbsp;&nbsp;Ram Card C&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;32 Go, DDR4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Speed Memomry&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;3600 MHz<br>" +
        "&nbsp;&nbsp;&nbsp;Ram Card D&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;None&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Speed Memomry&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0<br>" +
        "&nbsp;&nbsp;&nbsp;NVME&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;4 To&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Size Hard Drive&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;2.5 inch<br>" +
        "&nbsp;&nbsp;&nbsp;SSD&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;8 To&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Size Hard Drive&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;2.5 inch<br>"
    tableConfiguration.appendChild(ramDrive);
	
	const pciDevice = document.createElement('span');
	pciDevice.classList.add('column-terminal-span');
	pciDevice.innerHTML = "<br>PCI device listing....."
	columnStart.appendChild(pciDevice);
	
	const infoPci = document.createElement('span');
	infoPci.classList.add('column-terminal-span');
	infoPci.innerHTML = "Bus No.&nbsp;&nbsp;Device No.&nbsp;&nbsp;Func No.&nbsp;&nbsp;Vendor ID&nbsp;&nbsp;Device ID&nbsp;&nbsp;Device Class&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;IRQ"
	columnStart.appendChild(infoPci);
	
	const dataPci = document.createElement('span');
	dataPci.classList.add('column-terminal-span');
	dataPci.style.borderTop = '2px solid #00ff00';
	dataPci.style.paddingTop = '5px';
	dataPci.style.marginTop = '5px';
	dataPci.innerHTML = "&nbsp;&nbsp;&nbsp;0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8086&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1230&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;IDE Controller &nbsp;&nbsp;&nbsp;&nbsp;14"
	columnStart.appendChild(dataPci);
	
	setTimeout(() => {
		const dmiPool = document.createElement('span');
		dmiPool.classList.add('column-terminal-span');
		dmiPool.innerText = "Verifying DMI Pool Data....."
		columnStart.appendChild(dmiPool);
		setTimeout(() => {
			const startPortfolio = document.createElement('span');
			startPortfolio.classList.add('column-terminal-span');
			startPortfolio.innerText = "Starting FrogInDev-Portfolio..."
			columnStart.appendChild(startPortfolio);
			setTimeout(() => {
				columnStart.remove();
				showTerminal();
                startCompleteSound.play();
				columnTerminal.style.flexDirection = "row";
			},300);
			
		},2000);
	}, 600)
	
}

function showTerminal() {
	
	
    columnTerminalUser = document.createElement('div');
    columnTerminalUser.classList.add('terminal-user');
    terminal.appendChild(columnTerminalUser);
	
    welcomeTerminal = document.createElement('span');
    welcomeTerminal.id = 'welcomeTerminal';
    welcomeTerminal.classList.add('terminal-span');
    welcomeTerminal.innerHTML = "Welcome to FrogInDev Environment<br> You can use your keyboard arrows ↑↓ to navigate use ↵ to validate and use ← to go back. <br>You can also switch to terminal mod with the combination ctrl + space<br>";
    columnTerminal.appendChild(welcomeTerminal);

    const terminalContent = document.createElement('div');
    terminalContent.id = 'terminalContent';
	terminalContent.innerHTML = "<br>"
    columnTerminalUser.appendChild(terminalContent);

    const optionData = [
        { id: 'presentationOption', label: 'Presentation of FrogInDev' },
        { id: 'projectsOption', label: 'Projects of FrogInDev' },
        { id: 'skillsOption', label: 'Skills of FrogInDev' },
        { id: 'servicesOption', label: 'Services of FrogInDev' },
        { id: 'contactOption', label: 'Contact of FrogInDev' }
    ];

    optionData.forEach(opt => {
        const span = document.createElement('span');
        span.classList.add('terminal-span');
        span.id = opt.id;
        span.innerText = `- ${opt.label}\n`;
        terminalContent.appendChild(span);
    });


    options = Array.from(terminalContent.querySelectorAll('.terminal-span'));
    selectedIndex = 0;
    if (options[selectedIndex]) {
		options[selectedIndex].classList.add('selected-option');
	}

    switchTerminalMod();
}


let interactiveNavEnabled = false;

function switchTerminalMod() {
    // Écoute du switch de mode (Ctrl + Espace)
    window.addEventListener('keydown', function(event) {
        if (event.ctrlKey && event.code === 'Space') {
            const isInteractive = terminalMod.classList.contains("terminal-input-hidden");

            if (isInteractive) {
                // Passage en mode terminal (bash)
                isTerminalMod = true;
                terminalMod.classList.remove('terminal-input-hidden');
                inputTerminal.focus();

                if (welcomeTerminal) {
                    welcomeTerminal.innerHTML =
                        "Welcome to FrogInDev Environment <br> You can write bash commands to navigate. <br>You can also switch to interactive mod with the combination ctrl + space <br>";
                }

                // Supprimer le surlignage si existant
                removeAllHighlights();

                // Fix visuel : forçage de la hauteur de l'élément afin d'évité un décalage
				terminal.style.height = "0"
				setTimeout(() => {
					terminal.style.height = "100vh";
				},1)
                
				

            } else {
                // Passage en mode interactif
                isTerminalMod = false;
                terminalMod.classList.add('terminal-input-hidden');
                
                if (welcomeTerminal) {
                    welcomeTerminal.innerHTML =
                        "Welcome to FrogInDev Environment<br> You can use your keyboard arrows ↑↓ to navigate use ↵ to validate and use ← to go back. <br>You can also switch to terminal mod with the combination ctrl + space<br>";
                }

                // Réappliquer le surlignage selon l'état actuel
                applyCurrentHighlight();
            }
        }
    });

    // Gestion des commandes terminal (séparée de la navigation interactive)
    window.addEventListener('keydown', function(event) {
        if (isTerminalMod && event.code === 'Enter') {
            event.preventDefault(); // Empêcher le comportement par défaut
            executeCommand();
        }
    });

    // Une seule fois : navigation fléchée (seulement en mode interactif)
    if (!interactiveNavEnabled) {
        interactiveNavEnabled = true;

        window.addEventListener('keydown', function(event) {
            if (!terminalMod.classList.contains('terminal-input-hidden')) return; // Ne traite que si on est en mode interactif
            if (currentState !== 'menu') return; // Ne traite que si on est dans le menu principal
            
            navigateSound.play();
            if (event.code === 'ArrowDown') {
                if (options[selectedIndex]) {
                    options[selectedIndex].classList.remove('selected-option');
                }
                selectedIndex = (selectedIndex + 1) % options.length;
                if (options[selectedIndex]) {
                    options[selectedIndex].classList.add('selected-option');
                }
                event.preventDefault();

            } else if (event.code === 'ArrowUp') {
                if (options[selectedIndex]) {
                    options[selectedIndex].classList.remove('selected-option');
                }
                selectedIndex = (selectedIndex - 1 + options.length) % options.length;
                if (options[selectedIndex]) {
                    options[selectedIndex].classList.add('selected-option');
                }
                event.preventDefault();

            } else if (event.code === 'Enter') {
                if (options[selectedIndex]) {
                    chooseOption(options[selectedIndex].id);
                    enterSound.play();
                }
            } else if (event.code === 'Backspace' || event.code === 'ArrowLeft' && !terminalMod.classList.contains('terminal-input-hidden')) {
                resetToMenu();
            }
        });
    }
}

// Fonction pour supprimer tous les surlignages
function removeAllHighlights() {
    document.querySelectorAll('.selected-option').forEach(el => {
        el.classList.remove('selected-option');
    });
}

// Fonction pour appliquer le surlignage selon l'état actuel
function applyCurrentHighlight() {
    switch(currentState) {
        case 'menu':
            if (Array.isArray(options) && options.length > 0 && options[selectedIndex]) {
                options[selectedIndex].classList.add('selected-option');
            }
            break;
        case 'projects':
            // Le surlignage des projets est géré par handleProjectKeydown
            break;
        case 'skills':
            // Le surlignage des skills est géré par handleSkillsKeydown
            break;
        case 'services':
            // Le surlignage des services est géré par handleServicesKeydown
            break;
        case 'contact':
            // Le surlignage du contact est géré par handleContactKeydown
            break;
        case 'presentation':
            // Pas de surlignage dans la présentation
            break;
    }
}

function resetToMenu() {
    const terminalContent = document.getElementById('terminalContent');
    if (!terminalContent) return;

    // Réinitialise le contenu
    terminalContent.innerHTML = '';
    if (welcomeTerminal) {
        welcomeTerminal.innerHTML = "Welcome to FrogInDev Environment<br> You can use your keyboard arrows ↑↓ to navigate use ↵ to validate and use ← to go back. <br>You can also switch to terminal mod with the combination ctrl + space <br>";
    }

    // Données des options
    const optionsData = [
        { id: 'presentationOption', label: 'Presentation of FrogInDev' },
        { id: 'projectsOption', label: 'Projects of FrogInDev' },
        { id: 'skillsOption', label: 'Skills of FrogInDev' },
        { id: 'servicesOption', label: 'Services of FrogInDev' },
        { id: 'contactOption', label: 'Contact of FrogInDev' }
    ];

    // Recrée les options
    optionsData.forEach(opt => {
        const span = document.createElement('span');
        span.classList.add('terminal-span');
        span.id = opt.id;
        span.innerText = `- ${opt.label}\n`;
        terminalContent.appendChild(span);
    });

    // Réinitialisation navigation
    options = Array.from(terminalContent.querySelectorAll('.terminal-span'));
    if (!Array.isArray(options)) options = [];
	selectedIndex = 0;
    if (options[selectedIndex]) {
        options[selectedIndex].classList.add('selected-option');
    }

    // Remet l'état à menu (seulement si pas déjà fait)
    if (currentState !== 'menu') {
        currentState = 'menu';
        // Réinitialise le chemin seulement si pas déjà fait
        if (terminalInputPath && terminalInputPath.innerText !== '~') {
            terminalInputPath.innerText = '~';
        }
    }
    
    // Réinitialise les variables globales des skills
    if (typeof window.skillsCurrentView !== 'undefined') {
        window.skillsCurrentView = 'categories';
    }
    if (typeof window.skillsSelectedCategory !== 'undefined') {
        window.skillsSelectedCategory = null;
    }
}



function chooseOption(option) {
    const terminalContent = document.getElementById('terminalContent');
    
    // Cacher tout le contenu précédent
    Array.from(terminalContent.children).forEach(el => {
        el.style.display = 'none';
    });

    // Supprimer le surlignage
    if (options[selectedIndex]) {
        options[selectedIndex].classList.remove('selected-option');
    }

    // Gérer l'affichage de la section sélectionnée
    let newPath = '~';
    switch(option) {
        case 'presentationOption':
            currentState = 'presentation';
            newPath = '~/presentation';
            showPresentation();
            break;
        case 'projectsOption':
            currentState = 'projects';
            newPath = '~/projects';
            showProjects();
            break;
        case 'skillsOption':
            currentState = 'skills';
            newPath = '~/skills';
            showSkills();
            break;
        case 'servicesOption':
            currentState = 'services';
            newPath = '~/services';
            showServices();
            break;
        case 'contactOption':
            currentState = 'contact';
            newPath = '~/contact';
            showContact();
            break;
    }
    
    // Mettre à jour le chemin du terminal
    if (terminalInputPath) {
        terminalInputPath.innerText = newPath;
    }
}



function showPresentation() {
	let terminalContent = document.getElementById('terminalContent');
	terminalContent.innerHTML = '';
	
	// Mettre à jour le chemin
	if (terminalInputPath) {
		terminalInputPath.innerText = '~/presentation';
	}
	
	// Container principal
	const presentationContent = document.createElement('div');
	presentationContent.classList.add('presentation-content')
	terminalContent.appendChild(presentationContent)
	
	// Titre principal
	const titlePresentation = document.createElement('span')
	titlePresentation.innerText = "What is FrogInDev ?"
	titlePresentation.classList.add('title-h1-span')
	presentationContent.appendChild(titlePresentation)
	
	//Decription FrogInDev
	const descriptionTitle = document.createElement('span')
	descriptionTitle.innerText = "FrogInDev is a micro business specializing in custom website creation. \n I design and develop responsive and scalable websites \nto meet the unique needs of small businesses and individuals."
	descriptionTitle.classList.add('terminal-span');
	presentationContent.appendChild(descriptionTitle)
	
	// Info créateur
	const creatorPresentation = document.createElement('span')
	creatorPresentation.innerText = "Who's behind FrogInDev ?"
	creatorPresentation.classList.add('title-h2-span')
	presentationContent.appendChild(creatorPresentation) 
	
	// 
	const creatorDiv = document.createElement('div');
	creatorDiv.classList.add('creator-presentation')
	presentationContent.appendChild(creatorDiv);
	
	const creatorImg = document.createElement('img');
	creatorImg.src = './img/creator.jpg'
	creatorImg.classList.add('creator-img')
	creatorDiv.appendChild(creatorImg)
	
	const creatorDescriptionDiv = document.createElement('div');
	creatorDescriptionDiv.classList.add('creator-description-presentation')
	creatorDiv.appendChild(creatorDescriptionDiv)
	
	const creatorDescriptionSpan = document.createElement('span');
	creatorDescriptionSpan.classList.add('terminal-span');
	creatorDescriptionSpan.innerText = 'DeXils -\n Angel GIOANNI'
    creatorDescriptionSpan.style.marginBottom = '50px'
	creatorDescriptionDiv.appendChild(creatorDescriptionSpan)
	
	const arrowPre = document.createElement('pre')
	arrowPre.innerHTML = `                                                                                                    
   ......                                                                                           
    .+++++---....                                                                                   
    .-++++++++++++++---....                                                                         
    ..-++++++++++++++++++-.                                                                   ..    
      .+++++++++++++++++..                                                                 .....    
      .-++++++++++++++-..                                                               ...-...     
       .-+++++++++++++++..                                                           ..-+-..        
       ..+++++++++++++++++-...                                                  ....-+-...          
        .-+++++++++++++++++++-..                                             ..--+++...             
          -++++++++++++++++++++++-.....                               .....-++++-..                 
          .+++-...-++++++++++++++++++--....                    ......-+++++++-...                   
           -+..    ..-+++++++++++++++++++++++--............--++++++++++++-...                       
           ...       ....-+++++++++++++++++++++++++++++++++++++++++++....                           
                         .....-++++++++++++++++++++++++++++++++-......                              
                                 .....---++++++++++++---.....                                       
                                        ...............                                             
`
	arrowPre.classList.add('arrow-pre');
	creatorDescriptionDiv.appendChild(arrowPre)

    let separatorPresentation = document.createElement('div');
    separatorPresentation.classList.add('separator-presentation');
    creatorDiv.appendChild(separatorPresentation)

    let formationAndExperienceDiv = document.createElement('div');
    formationAndExperienceDiv.classList.add('formation-and-experience');
    creatorDiv.appendChild(formationAndExperienceDiv)

    let formationDiv = document.createElement('div');
    formationDiv.classList.add('formation-div');
    formationAndExperienceDiv.appendChild(formationDiv);

    let formationTitle = document.createElement('span')
    formationTitle.classList.add('title-h2-span');
    formationTitle.innerHTML = "Formation : "
    formationDiv.appendChild(formationTitle);

    let formationSpan = document.createElement('p');
    formationSpan.classList.add('terminal-span');
    formationSpan.style.marginBottom = '0px'
    formationSpan.innerHTML = "&nbsp;- [2021 - Today] BUT Informatique \"Réalisation d'Applications : Conception Développement Validation\""
    formationDiv.appendChild(formationSpan);

    let experienceDiv = document.createElement('div');
    experienceDiv.classList.add('experience-div');
    formationAndExperienceDiv.appendChild(experienceDiv);

    let experienceTitle = document.createElement('span');
    experienceTitle.classList.add('title-h2-span');
    experienceTitle.innerHTML = "Experience : "
    experienceDiv.appendChild(experienceTitle);

    let experiences = document.createElement('p');
    experiences.classList.add('terminal-span');
    experiences.innerHTML = "&nbsp;- [05/08/2024 - Today] Work-study - Sames, Meylan, France<br>&nbsp;- [22/04/2024 - 28/06/2024] Internship - Sames, Meylan, France<br>&nbsp;- [2023 - Today] Fiverr - DeXils, Saint-Georges-de-Commiers, France<br>&nbsp;- [04/04/2023 – 07/07/2023] Internship - G.E.A, Meylan, France<br>&nbsp;- [Summer 2020 -2021 - 2022] Versatile team member - McDonald's, Allan, France"
    experienceDiv.appendChild(experiences);
    
    // Gestion du retour en arrière
    function handlePresentationKeydown(event) {
        // Vérifier si on est en mode interactif
        if (!terminalMod.classList.contains('terminal-input-hidden')) {
            return; // Ne traite rien si on est en mode terminal
        }
        
        if (event.code === 'Backspace' || event.code === 'ArrowLeft' && !terminalMod.classList.contains('terminal-input-hidden')) {
            window.removeEventListener('keydown', handlePresentationKeydown);
            resetToMenu();
        }
    }
    window.addEventListener('keydown', handlePresentationKeydown);
}

function showProjects() {
    let terminalContent = document.getElementById('terminalContent');
    terminalContent.innerHTML = '';

    // Mettre à jour le chemin
    if (terminalInputPath) {
        terminalInputPath.innerText = '~/projects';
    }

    projects = [
        {
            title: "FrogInDev Portfolio",
            description: "Interactive portfolio with terminal mode inspired by BIOS.",
            tech: "HTML, CSS, JavaScript",
            link: "https://github.com/DeXils/portfolio",
            year: "2025",
            image: "./img/portfolio.png"
        },
        {
            title: "Gamification task manager",
            description: "A task manager with gamification features to help you stay motivated and focused.",
            tech: "Flutter, Dart, SQLite",
            link: "#",
            year: "2025",
            image: "./img/task-manager.png"
        },
        {
            title: "Clantis",
            description: "Discord server RP base on a orignal story with customs bots.",
            tech: "Discord.py, Python",
            link: "https://discord.gg/2TEPXpjcdz",
            year: "2025",
            image: "./img/clantis.png"
        },
        {
            title: "Thief Game",
            description: "A game base on card who you can steal to get points.",
            tech: "HTML, CSS, JavaScript, Vue.js",
            link: "#",
            year: "2024",
            image: "./img/thief-game.png"
        },
        {
            title: "Tracking GPS",
            description: "A tracking GPS with a map and a list of points.",
            tech: "Android Studio, Java, XML, HTML, CSS, JavaScript",
            link: "#",
            year: "2024",
            image: "./img/gps-tracker.png"
        },
        {
            title: "Intership Book",
            description: "A project to help a student to find a intership.",
            tech: "HTML, CSS, JavaScript, PhP, Symfony",
            link: "#",
            year: "2024",
            image: "./img/internship-book.png"
        },
        {
            title: "M.A.M",
            description: "A way to have access to all the information about the game Satisfactory.",
            tech: "HTML, CSS, JavaScript",
            link: "https://dexils.github.io/tp-api-R4.10/",
            year: "2024",
            image: "./img/mam.png"
        },
        {
            title: "Satisfactory API",
            description: "An API to get information about the game Satisfactory.",
            tech: "HTML, CSS, JavaScript, PostgreSQL, Node.js, Express, Raspberry Pi",
            link: "https://dexils.dyndns.org:58000/api/",
            year: "2023",
            image: "./img/satisfactory-api.png"
        },
        {
            title: "Satisfactory Calculator",
            description: "A calculator to help you calculate the amount of resources you need to build a factory.",
            tech: "HTML, CSS, JavaScript, PostgreSQL, Node.js, Express",
            link: "#",
            year: "2022",
            image: "./img/calculator-satisfactory.png"
        },
        {
            title: "Personal consumption tracker",
            description: "A way to track your personal consumption",
            tech: "HTML, CSS, JavaScript, Vue.js, WebSocket, Broker MQTT",
            link: "#",
            year: "2023",
            image: "./img/consumption-tracker.png"
        }
    ];

    // Création du conteneur
    const projectsContent = document.createElement('div');
    projectsContent.classList.add('projects-content');
    terminalContent.appendChild(projectsContent);

    // Titre
    const title = document.createElement('span');
    title.innerText = "Projects";
    title.classList.add('title-h1-span');
    projectsContent.appendChild(title);

    // Liste des projets
    projectSpans = [];
    projects.forEach((project, idx) => {
        const span = document.createElement('span');
        span.classList.add('terminal-span');
        span.innerText = `- ${project.title} (${project.year})\n`;
        span.setAttribute('tabindex', 0);
        span.dataset.projectIndex = idx;
        projectsContent.appendChild(span);
        projectSpans.push(span);
    });

    // Navigation clavier
    projectSelectedIndex = 0;
    updateProjectSelection();

    window.addEventListener('keydown', handleProjectKeydown);
}

// === GLOBAL ===
let projectSelectedIndex = 0;
let projectSpans = [];
let projects = [];

function handleProjectKeydown(event) {
    // Vérifier si on est en mode interactif
    if (!terminalMod.classList.contains('terminal-input-hidden')) {
        return; // Ne traite rien si on est en mode terminal
    }
    
    if (document.querySelector('.project-modal-bg')) return; // Bloque navigation si modal ouverte
    if (event.code === 'ArrowDown') {
        projectSpans[projectSelectedIndex].classList.remove('selected-option');
        projectSelectedIndex = (projectSelectedIndex + 1) % projectSpans.length;
        updateProjectSelection();
        navigateSound.play();
        event.preventDefault();
    } else if (event.code === 'ArrowUp') {
        projectSpans[projectSelectedIndex].classList.remove('selected-option');
        projectSelectedIndex = (projectSelectedIndex - 1 + projectSpans.length) % projectSpans.length;
        updateProjectSelection();
        navigateSound.play();
        event.preventDefault();
    } else if (event.code === 'Enter') {
        showProjectModal(projects[projectSelectedIndex]);
        enterSound.play();
    } else if (event.code === 'Backspace' || event.code === 'ArrowLeft') {
        window.removeEventListener('keydown', handleProjectKeydown);
        resetToMenu();
    }
}

function updateProjectSelection() {
    projectSpans.forEach((s, i) => s.classList.toggle('selected-option', i === projectSelectedIndex));
}

function showProjectModal(project) {
    // Création du fond
    const modalBg = document.createElement('div');
    modalBg.className = 'project-modal-bg';
    
    // Création du contenu
    const modal = document.createElement('div');
    modal.className = 'project-modal';
    
    // Message pour fermer avec Échap (en haut à droite)
    const escapeMsg = document.createElement('div');
    escapeMsg.innerHTML = '<small>Press <kbd>ESC</kbd> to close</small>';
    escapeMsg.className = 'project-modal-escape';
    modal.appendChild(escapeMsg);
    
    // En-tête avec titre et année
    const header = document.createElement('div');
    header.className = 'project-modal-header';
    
    // Titre
    const modalTitle = document.createElement('h2');
    modalTitle.innerText = project.title;
    header.appendChild(modalTitle);
    
    // Année
    const year = document.createElement('span');
    year.className = 'project-modal-year';
    year.innerText = project.year;
    header.appendChild(year);
    
    modal.appendChild(header);
    
    // Description
    const desc = document.createElement('p');
    desc.className = 'project-modal-description';
    desc.innerText = project.description;
    modal.appendChild(desc);
    
    // Technologies
    const tech = document.createElement('div');
    tech.className = 'project-modal-tech';
    tech.innerHTML = `<b>Technologies:</b> ${project.tech}`;
    modal.appendChild(tech);
    
    // Image du projet (si disponible)
    if (project.image) {
        const projectImg = document.createElement('img');
        projectImg.src = project.image;
        projectImg.alt = project.title;
        projectImg.className = 'project-modal-img';
        projectImg.onerror = function() {
            this.style.display = 'none'; // Cache l'image si elle n'existe pas
        };
        modal.appendChild(projectImg);
    }
    
    // Lien (si présent)
    if (project.link && project.link !== "#") {
        const link = document.createElement('a');
        link.href = project.link;
        link.innerText = 'Voir le projet';
        link.target = '_blank';
        link.className = 'project-modal-link';
        modal.appendChild(link);
        
        // Message pour accès direct avec espace
        const spaceMsg = document.createElement('div');
        spaceMsg.innerHTML = '<small>Press <kbd>SPACE</kbd> to open project directly</small>';
        spaceMsg.className = 'project-modal-space-msg';
        modal.appendChild(spaceMsg);
    }
    
    modalBg.appendChild(modal);
    document.body.appendChild(modalBg);

    // Fermeture avec Echap ou clic fond
    function closeModal() {
        modalBg.remove();
        window.addEventListener('keydown', handleProjectKeydown);
    }
    modalBg.onclick = function(e) { if (e.target === modalBg) closeModal(); };
    window.removeEventListener('keydown', handleProjectKeydown);
    window.addEventListener('keydown', function escListener(e) {
        if (e.code === 'Escape') {
            closeModal();
            window.removeEventListener('keydown', escListener);
        } else if (e.code === 'Space' && project.link && project.link !== "#") {
            // Accès direct au projet avec espace
            window.open(project.link, '_blank');
            closeModal();
            window.removeEventListener('keydown', escListener);
        }
    });
}

function showSkills(){
    let terminalContent = document.getElementById('terminalContent');
    terminalContent.innerHTML = '';

    // Container principal
    const skillsContent = document.createElement('div');
    skillsContent.classList.add('skills-content');
    terminalContent.appendChild(skillsContent);

    // Titre principal
    const title = document.createElement('span');
    title.innerText = "Skills & Competencies";
    title.classList.add('title-h1-span');
    skillsContent.appendChild(title);

    // Données des compétences
    const skillsData = {
        web: {
            title: "Web Development",
            skills: [
                "HTML5 - Semantic markup, accessibility, responsive design",
                "CSS3 - Flexbox, Grid, animations, preprocessors (Sass/SCSS)",
                "JavaScript (ES6+) - DOM manipulation, async programming, modern syntax",
                "Vue.js - Component-based architecture, reactivity system, Vue Router",
                "PHP - Server-side scripting, object-oriented programming",
                "Symfony - Full-stack framework, Doctrine ORM, Twig templating"
            ]
        },
        languages: {
            title: "Programming Languages",
            skills: [
                "Python - Data analysis, automation, web development (Django/Flask)",
                "Java - Object-oriented programming, Android development",
                "C# - .NET framework, desktop applications, Unity development",
                "C/C++ - System programming, embedded systems, performance optimization",
                "Dart - Flutter development, cross-platform mobile applications"
            ]
        },
        tools: {
            title: "Frameworks & Tools",
            skills: [
                "IFS Cloud - ERP system implementation and customization",
                "Armony Reporter - Dynamic PDF report generation",
                "Node.js - Server-side JavaScript, Express.js framework",
                "PostgreSQL - Database design, optimization, complex queries",
                "Git - Version control, collaborative development",
                "Docker - Containerization, deployment automation",
                "RESTful APIs - Design, implementation, documentation",
                "Agile/Scrum - Project management methodologies"
            ]
        },
        soft: {
            title: "Soft Skills",
            skills: [
                "Autonomy - Self-directed learning, problem-solving",
                "Team Spirit - Collaborative development, knowledge sharing",
                "Adaptability - Quick learning of new technologies",
                "Punctuality - Meeting deadlines, reliable delivery",
                "Communication - Technical documentation, client interaction",
                "Analytical Thinking - Complex problem analysis and solution design"
            ]
        }
    };

    // État de navigation (variables globales pour la persistance)
    if (typeof window.skillsCurrentView === 'undefined') {
        window.skillsCurrentView = 'categories';
    }
    if (typeof window.skillsSelectedCategory === 'undefined') {
        window.skillsSelectedCategory = null;
    }
    
    let selectedIndex = 0;
    let categorySpans = [];
    let skillSpans = [];

    // Fonction pour afficher les catégories
    function showCategories() {
        window.skillsCurrentView = 'categories';
        window.skillsSelectedCategory = null;
        
        // Mettre à jour le chemin
        if (terminalInputPath) {
            terminalInputPath.innerText = '~/skills';
        }
        
        // Nettoyer le contenu
        const existingContent = skillsContent.querySelector('.categories-list');
        if (existingContent) existingContent.remove();
        
        const existingDetails = skillsContent.querySelector('.skills-details');
        if (existingDetails) existingDetails.remove();

        // Créer la liste des catégories
        const categoriesList = document.createElement('div');
        categoriesList.classList.add('categories-list');
        skillsContent.appendChild(categoriesList);

        const categories = [
            { key: 'web', label: 'Web Development' },
            { key: 'languages', label: 'Programming Languages' },
            { key: 'tools', label: 'Frameworks & Tools' },
            { key: 'soft', label: 'Soft Skills' }
        ];

        categorySpans = [];
        categories.forEach((category, idx) => {
            const span = document.createElement('span');
            span.classList.add('terminal-span');
            span.innerText = `- ${category.label}\n`;
            span.dataset.categoryKey = category.key;
            categoriesList.appendChild(span);
            categorySpans.push(span);
        });

        selectedIndex = 0;
        updateCategorySelection();
    }

    // Fonction pour afficher les détails d'une catégorie
    function showCategoryDetails(categoryKey) {
        window.skillsCurrentView = 'details';
        window.skillsSelectedCategory = categoryKey;
        
        // Mettre à jour le chemin avec la sous-section
        const categoryName = skillsData[categoryKey].title.toLowerCase().replace(/\s+/g, '-');
        if (terminalInputPath) {
            terminalInputPath.innerText = `~/skills/${categoryName}`;
        }
        
        // Nettoyer le contenu
        const existingContent = skillsContent.querySelector('.categories-list');
        if (existingContent) existingContent.remove();
        
        const existingDetails = skillsContent.querySelector('.skills-details');
        if (existingDetails) existingDetails.remove();

        // Créer la zone de détails
        const detailsZone = document.createElement('div');
        detailsZone.classList.add('skills-details');
        skillsContent.appendChild(detailsZone);

        const category = skillsData[categoryKey];
        const categoryTitle = document.createElement('span');
        categoryTitle.classList.add('title-h2-span');
        categoryTitle.innerText = category.title;
        detailsZone.appendChild(categoryTitle);

        // Affichage simple des compétences sans navigation
        category.skills.forEach((skill) => {
            const span = document.createElement('span');
            span.classList.add('terminal-span');
            span.innerText = `  • ${skill}\n`;
            detailsZone.appendChild(span);
        });
    }

    // Fonction pour mettre à jour la sélection des catégories
    function updateCategorySelection() {
        categorySpans.forEach((span, idx) => {
            span.classList.toggle('selected-option', idx === selectedIndex);
        });
    }

    // Gestion des événements clavier
    function handleSkillsKeydown(event) {
        if (window.skillsCurrentView === 'categories') {
            if (event.code === 'ArrowDown') {
                categorySpans[selectedIndex].classList.remove('selected-option');
                selectedIndex = (selectedIndex + 1) % categorySpans.length;
                updateCategorySelection();
                navigateSound.play();
                event.preventDefault();
            } else if (event.code === 'ArrowUp') {
                categorySpans[selectedIndex].classList.remove('selected-option');
                selectedIndex = (selectedIndex - 1 + categorySpans.length) % categorySpans.length;
                updateCategorySelection();
                navigateSound.play();
                event.preventDefault();
            } else if (event.code === 'Enter') {
                const categoryKey = categorySpans[selectedIndex].dataset.categoryKey;
                showCategoryDetails(categoryKey);
                enterSound.play();
            } else if (event.code === 'Backspace' || event.code === 'ArrowLeft' && !terminalMod.classList.contains('terminal-input-hidden')) {
                window.removeEventListener('keydown', handleSkillsKeydown);
                resetToMenu();
            }
        } else if (window.skillsCurrentView === 'details') {
            // Dans la vue détails, seule la touche retour fonctionne
            if (event.code === 'Backspace' || event.code === 'ArrowLeft' && !terminalMod.classList.contains('terminal-input-hidden')) {
                showCategories(); // Retour aux catégories
            }
        }
    }

    // Initialiser l'affichage selon l'état actuel
    if (window.skillsCurrentView === 'details' && window.skillsSelectedCategory) {
        showCategoryDetails(window.skillsSelectedCategory);
    } else {
        showCategories();
    }
    
    window.addEventListener('keydown', handleSkillsKeydown);
}

function showServices(){
    let terminalContent = document.getElementById('terminalContent');
    terminalContent.innerHTML = '';

    // Mettre à jour le chemin
    if (terminalInputPath) {
        terminalInputPath.innerText = '~/services';
    }

    // Container principal
    const servicesContent = document.createElement('div');
    servicesContent.classList.add('services-content');
    terminalContent.appendChild(servicesContent);

    // Titre principal
    const title = document.createElement('span');
    title.innerText = "Services & Prestations";
    title.classList.add('title-h1-span');
    servicesContent.appendChild(title);

    // Description générale
    const description = document.createElement('span');
    description.classList.add('terminal-span');
    description.innerHTML = "FrogInDev offers personalized web development services<br>to meet the specific needs of your business.<br><br>";
    servicesContent.appendChild(description);

    // Contact email
    const contactEmail = document.createElement('span');
    contactEmail.classList.add('terminal-span');
    contactEmail.style.marginBottom = "-25px";
    contactEmail.innerHTML = "<b>For personalized quotes:</b> frogindev@gmail.com<br><br>";
    servicesContent.appendChild(contactEmail);

    // Liste des services
    const servicesList = document.createElement('div');
    servicesList.classList.add('services-list');
    servicesContent.appendChild(servicesList);

    const services = [
        {
            title: "Responsive Websites",
            description: "Creation of modern and adaptive websites that display perfectly on all devices (computers, tablets, smartphones).",
            features: ["Custom design", "SEO optimization", "Performance optimized", "Maintenance included"]
        },
        {
            title: "Web Applications",
            description: "Development of custom web applications to automate your business processes and improve your productivity.",
            features: ["Intuitive interface", "Secure database", "REST API", "Cloud deployment"]
        },
        {
            title: "E-commerce",
            description: "Creation of complete online stores with secure payment system and inventory management.",
            features: ["Product catalog", "Secure payment", "Order management", "Integrated analytics"]
        },
        {
            title: "Maintenance & Support",
            description: "Continuous maintenance services, security updates and technical support for your existing projects.",
            features: ["24/7 monitoring", "Automatic backups", "Security updates", "Responsive support"]
        }
    ];

    let serviceSpans = [];
    services.forEach((service, idx) => {
        const serviceDiv = document.createElement('div');
        serviceDiv.classList.add('service-item');
        
        const serviceTitle = document.createElement('span');
        serviceTitle.classList.add('terminal-span');
        serviceTitle.innerText = `- ${service.title}\n`;
        serviceTitle.dataset.serviceIndex = idx;
        serviceDiv.appendChild(serviceTitle);
        
        serviceSpans.push(serviceTitle);
        servicesList.appendChild(serviceDiv);
    });

    // Zone de détails
    const detailsZone = document.createElement('div');
    detailsZone.classList.add('service-details');
    servicesContent.appendChild(detailsZone);

    // Navigation et affichage des détails
    let selectedIndex = 0;
    function updateServiceSelection() {
        serviceSpans.forEach((span, idx) => {
            span.classList.toggle('selected-option', idx === selectedIndex);
        });
        showServiceDetails(services[selectedIndex]);
    }

    function showServiceDetails(service) {
        detailsZone.innerHTML = '';
        
        const title = document.createElement('span');
        title.classList.add('title-h2-span');
        title.innerText = service.title;
        detailsZone.appendChild(title);
        
        const desc = document.createElement('span');
        desc.classList.add('terminal-span');
        desc.innerHTML = `<br>${service.description}<br><br>`;
        detailsZone.appendChild(desc);
        
        const featuresTitle = document.createElement('span');
        featuresTitle.classList.add('terminal-span');
        featuresTitle.innerHTML = '<b>Included features:</b><br>';
        detailsZone.appendChild(featuresTitle);
        
        service.features.forEach(feature => {
            const featureSpan = document.createElement('span');
            featureSpan.classList.add('terminal-span');
            featureSpan.innerText = `  • ${feature}\n`;
            detailsZone.appendChild(featureSpan);
        });
    }

    // Gestion des événements clavier
    function handleServicesKeydown(event) {
        if (event.code === 'ArrowDown') {
            serviceSpans[selectedIndex].classList.remove('selected-option');
            selectedIndex = (selectedIndex + 1) % serviceSpans.length;
            updateServiceSelection();
            navigateSound.play();
            event.preventDefault();
        } else if (event.code === 'ArrowUp') {
            serviceSpans[selectedIndex].classList.remove('selected-option');
            selectedIndex = (selectedIndex - 1 + serviceSpans.length) % serviceSpans.length;
            updateServiceSelection();
            navigateSound.play();
            event.preventDefault();
        } else if (event.code === 'Backspace' || event.code === 'ArrowLeft' && !terminalMod.classList.contains('terminal-input-hidden')) {
            window.removeEventListener('keydown', handleServicesKeydown);
            resetToMenu();
        }
    }

    // Initialiser l'affichage
    updateServiceSelection();
    window.addEventListener('keydown', handleServicesKeydown);
}

function showContact(){
    let terminalContent = document.getElementById('terminalContent');
    terminalContent.innerHTML = '';

    // Mettre à jour le chemin
    if (terminalInputPath) {
        terminalInputPath.innerText = '~/contact';
    }

    // Container principal
    const contactContent = document.createElement('div');
    contactContent.classList.add('contact-content');
    terminalContent.appendChild(contactContent);

    // Titre principal
    const title = document.createElement('span');
    title.innerText = "Contact Information";
    title.classList.add('title-h1-span');
    contactContent.appendChild(title);

    // Description
    const description = document.createElement('span');
    description.classList.add('terminal-span');
    description.innerHTML = "Don't hesitate to contact me to discuss your projects!<br><br>";
    contactContent.appendChild(description);

    // Informations de contact
    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contact-info');
    contactContent.appendChild(contactInfo);

    const contacts = [
        {
            label: "Email (FrogInDev)",
            value: "frogindev@gmail.com",
            link: "mailto:frogindev@gmail.com"
        },
        {
            label: "GitHub",
            value: "github.com/DeXils",
            link: "https://github.com/DeXils"
        },
        {
            label: "Discord",
            value: "dexils",
            link: null
        },
        {
            label: "LinkedIn",
            value: "angel-gioanni",
            link: "https://www.linkedin.com/in/angel-gioanni-97851329b/"
        }
    ];

    let contactSpans = [];
    contacts.forEach((contact, idx) => {
        const contactDiv = document.createElement('div');
        contactDiv.classList.add('contact-item');
        
        const contactSpan = document.createElement('span');
        contactSpan.classList.add('terminal-span');
        contactSpan.innerHTML = `<b>${contact.label}:</b> ${contact.value}<br>`;
        contactSpan.dataset.contactIndex = idx;
        contactDiv.appendChild(contactSpan);
        
        contactSpans.push(contactSpan);
        contactInfo.appendChild(contactDiv);
    });

    // Zone d'action
    const actionZone = document.createElement('div');
    actionZone.classList.add('contact-action');
    contactContent.appendChild(actionZone);

    const actionText = document.createElement('span');
    actionText.classList.add('terminal-span');
    actionText.innerHTML = '<br><b>Available actions:</b><br>';
    actionZone.appendChild(actionText);

    const actions = [
        { key: 'email', label: 'Open Email' },
        { key: 'github', label: 'View GitHub' },
        { key: 'linkedin', label: 'View LinkedIn' }
    ];

    let actionSpans = [];
    actions.forEach((action, idx) => {
        const actionSpan = document.createElement('span');
        actionSpan.classList.add('terminal-span');
        actionSpan.innerHTML = `- ${action.label}<br>`;
        actionSpan.dataset.actionKey = action.key;
        actionZone.appendChild(actionSpan);
        actionSpans.push(actionSpan);
    });

    // Navigation
    let selectedIndex = 0;
    let currentSection = 'contacts'; // 'contacts' ou 'actions'
    let currentItems = contactSpans;

    function updateSelection() {
        if (currentSection === 'contacts') {
            contactSpans.forEach((span, idx) => {
                span.classList.toggle('selected-option', idx === selectedIndex);
            });
            actionSpans.forEach(span => span.classList.remove('selected-option'));
        } else {
            actionSpans.forEach((span, idx) => {
                span.classList.toggle('selected-option', idx === selectedIndex);
            });
            contactSpans.forEach(span => span.classList.remove('selected-option'));
        }
    }

    function executeAction() {
        if (currentSection === 'actions') {
            const actionKey = actionSpans[selectedIndex].dataset.actionKey;
            switch(actionKey) {
                case 'email':
                    window.open('mailto:frogindev@gmail.com', '_blank');
                    break;
                case 'github':
                    window.open('https://github.com/DeXils', '_blank');
                    break;
                case 'linkedin':
                    window.open('https://www.linkedin.com/in/angel-gioanni-97851329b/', '_blank');
                    break;
            }
        }
    }

    // Gestion des événements clavier
    function handleContactKeydown(event) {
        if (event.code === 'ArrowDown') {
            currentItems[selectedIndex].classList.remove('selected-option');
            selectedIndex = (selectedIndex + 1) % currentItems.length;
            updateSelection();
            navigateSound.play();
            event.preventDefault();
        } else if (event.code === 'ArrowUp') {
            currentItems[selectedIndex].classList.remove('selected-option');
            selectedIndex = (selectedIndex - 1 + currentItems.length) % currentItems.length;
            updateSelection();
            navigateSound.play();
            event.preventDefault();
        } else if (event.code === 'Enter') {
            executeAction();
            enterSound.play();
        } else if (event.code === 'Space') {
            // Basculer entre contacts et actions
            if (currentSection === 'contacts') {
                currentSection = 'actions';
                currentItems = actionSpans;
                selectedIndex = 0;
            } else {
                currentSection = 'contacts';
                currentItems = contactSpans;
                selectedIndex = 0;
            }
            updateSelection();
            navigateSound.play();
        } else if (event.code === 'Backspace' || event.code === 'ArrowLeft' && !terminalMod.classList.contains('terminal-input-hidden')) {
            window.removeEventListener('keydown', handleContactKeydown);
            resetToMenu();
        }
    }

    // Initialiser l'affichage
    updateSelection();
    window.addEventListener('keydown', handleContactKeydown);
}

function executeCommand() {
    const command = inputTerminal.value.trim();
    inputTerminal.value = '';
    
    // Ajouter la commande à l'historique
    addToTerminalHistory(command);
    
    // Traiter la commande
    const parts = command.split(' ');
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1);
    
    switch (cmd) {
        case 'help':
            showTerminalHelp();
            break;
        case 'cd':
            handleCdCommand(args);
            break;
        case 'openproj':
            handleOpenProjCommand(args);
            break;
        case 'closeproj':
            handleCloseProjCommand(args);
            break;
        case 'goto':
            handleGotoCommand(args);
            break;
        case 'mkdir':
            showMkdirError();
            break;
        case 'su':
            handleSuCommand(args);
            break;
        case '':
            // Commande vide, ne rien faire
            break;
        default:
            showCommandNotFound(command);
            break;
    }
}

// Fonction pour gérer les commandes cd
function handleCdCommand(args) {
    if (args.length === 0) {
        showCommandError('cd: missing argument');
        return;
    }
    
    const target = args[0];
    
    if (target === '..') {
        if (currentState === 'menu') {
            // Easter egg: accès au sous-dossier caché
            showRickRoll();
        } else if (currentState === 'skills' && window.skillsCurrentView === 'details') {
            // Retour aux catégories de skills
            window.skillsCurrentView = 'categories';
            if (terminalInputPath) {
                terminalInputPath.innerText = '~/skills';
            }
            // Recharger l'affichage des catégories
            showSkills();
        } else {
            // Retour au menu principal
            currentState = 'menu';
            if (terminalInputPath) {
                terminalInputPath.innerText = '~';
            }
            resetToMenu();
        }
    } else {
        // Navigation vers une section
        switch(target) {
            case 'presentation':
                openSection('presentation');
                break;
            case 'projects':
                openSection('projects');
                break;
            case 'skills':
                openSection('skills');
                break;
            case 'services':
                openSection('services');
                break;
            case 'contact':
                openSection('contact');
                break;
            case 'web-development':
            case 'web':
                if (currentState === 'skills') {
                    // Navigation vers la sous-section web
                    window.skillsCurrentView = 'details';
                    window.skillsSelectedCategory = 'web';
                    if (terminalInputPath) {
                        terminalInputPath.innerText = '~/skills/web-development';
                    }
                    showSkills();
                } else {
                    showCommandError(`cd: ${target}: No such directory`);
                }
                break;
            case 'programming-languages':
            case 'languages':
                if (currentState === 'skills') {
                    // Navigation vers la sous-section languages
                    window.skillsCurrentView = 'details';
                    window.skillsSelectedCategory = 'languages';
                    if (terminalInputPath) {
                        terminalInputPath.innerText = '~/skills/programming-languages';
                    }
                    showSkills();
                } else {
                    showCommandError(`cd: ${target}: No such directory`);
                }
                break;
            case 'frameworks-tools':
            case 'tools':
                if (currentState === 'skills') {
                    // Navigation vers la sous-section tools
                    window.skillsCurrentView = 'details';
                    window.skillsSelectedCategory = 'tools';
                    if (terminalInputPath) {
                        terminalInputPath.innerText = '~/skills/frameworks-tools';
                    }
                    showSkills();
                } else {
                    showCommandError(`cd: ${target}: No such directory`);
                }
                break;
            case 'soft-skills':
            case 'soft':
                if (currentState === 'skills') {
                    // Navigation vers la sous-section soft
                    window.skillsCurrentView = 'details';
                    window.skillsSelectedCategory = 'soft';
                    if (terminalInputPath) {
                        terminalInputPath.innerText = '~/skills/soft-skills';
                    }
                    showSkills();
                } else {
                    showCommandError(`cd: ${target}: No such directory`);
                }
                break;
            default:
                showCommandError(`cd: ${target}: No such directory`);
                break;
        }
    }
}

// Fonction pour gérer les commandes openproj
function handleOpenProjCommand(args) {
    if (currentState !== 'projects') {
        showCommandError('openproj: Must be in projects directory');
        return;
    }
    
    if (args.length < 2 || args[0] !== '-m') {
        showCommandError('openproj: Usage: openproj -m [ID]');
        return;
    }
    
    const projectId = parseInt(args[1]);
    if (isNaN(projectId) || projectId < 0 || projectId >= 9) {
        showCommandError(`openproj: Project ID ${args[1]} not found`);
        return;
    }
    
    // Ouvrir la modal du projet
    showProjectModal(projects[projectId]);
}

// Fonction pour gérer les commandes closeproj
function handleCloseProjCommand(args) {
    if (currentState !== 'projects') {
        showCommandError('closeproj: Must be in projects directory');
        return;
    }
    
    const modal = document.querySelector('.project-modal-bg');
    if (modal) {
        modal.remove();
        showTerminalOutput('Project modal closed');
    } else {
        showCommandError('closeproj: No project modal open');
    }
}

// Fonction pour gérer les commandes goto
function handleGotoCommand(args) {
    if (args.length === 0) {
        showCommandError('goto: missing URL argument');
        return;
    }
    
    const url = args[0];
    if (url.startsWith('http')) {
        window.open(url, '_blank');
        showTerminalOutput(`Opening ${url} in new tab`);
    } else {
        showCommandError(`goto: Invalid URL: ${url}`);
    }
}

// Fonction pour afficher l'erreur mkdir
function showMkdirError() {
    showCommandError('mkdir: Permission denied. Use su -i to gain root privileges.');
}

// Fonction pour gérer les commandes su
function handleSuCommand(args) {
    if (args.length === 0 || args[0] !== '-i') {
        showCommandError('su: Usage: su -i');
        return;
    }
    
    showTerminalOutput('Password: ');
    
    // Créer un input temporaire pour le mot de passe
    const terminalContent = document.getElementById('terminalContent');
    const passwordInput = document.createElement('input');
    passwordInput.type = 'password';
    passwordInput.classList.add('terminal-password-input');
    passwordInput.style.background = 'transparent';
    passwordInput.style.border = 'none';
    passwordInput.style.color = '#00ff00';
    passwordInput.style.fontFamily = 'Courier New, monospace';
    passwordInput.style.outline = 'none';
    passwordInput.style.width = '200px';
    
    terminalContent.appendChild(passwordInput);
    passwordInput.focus();
    
    passwordInput.addEventListener('keydown', function(event) {
        if (event.code === 'Enter') {
            const password = passwordInput.value;
            passwordInput.remove();
            
            // Ajouter l'historique du mot de passe (masqué)
            const historyEntry = document.createElement('div');
            historyEntry.classList.add('terminal-history-entry');
            historyEntry.innerHTML = `<span class="terminal-prompt">Password:</span> ${'*'.repeat(password.length)}`;
            terminalContent.appendChild(historyEntry);
            
            // Exécuter l'easter egg
            executeSuEasterEgg();
        }
    });
}

// Fonction pour exécuter l'easter egg su -i
function executeSuEasterEgg() {
    showTerminalOutput('Access granted. Welcome to the dark side...');
    
    setTimeout(() => {
        fetch('https://ipinfo.io/json?token=42f1e7f44c5dbd')
            .then(res => res.json())
            .then(data => {
                alert(`Hello mysterious visitor from ${data.city}, ${data.country}...`);
                setTimeout(() => {
                    alert(`Hmm... You are using ${navigator.userAgent}...`);
                    setTimeout(() => {
                        navigator.geolocation.getCurrentPosition(pos => {
                            alert(`And now I know your exact position: ${pos.coords.latitude}, ${pos.coords.longitude}`);
                        }, () => {
                            alert("You escaped me for geolocation... this time");
                        });
                    }, 2000);
                }, 2000);
            })
            .catch(() => {
                alert("Network error. You are safe... for now.");
            });
        
        // Redémarrage après 10 secondes
        setTimeout(() => {
            showTerminalOutput('System compromised. Initiating emergency reboot...');
            setTimeout(() => {
                showTerminalOutput('Reboot in 3...');
                setTimeout(() => {
                    showTerminalOutput('Reboot in 2...');
                    setTimeout(() => {
                        showTerminalOutput('Reboot in 1...');
                        setTimeout(() => {
                            location.reload();
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 10000);
        }, 1000);
    }, 1000);
}

// Fonction pour afficher le Rick Roll
function showRickRoll() {
    const terminalContent = document.getElementById('terminalContent');
    const rickRollDiv = document.createElement('div');
    rickRollDiv.classList.add('terminal-output');
    rickRollDiv.innerHTML = `
=== HIDDEN DIRECTORY ===
Welcome to the secret folder!

You've been Rick Rolled!
Never gonna give you up...
Never gonna let you down...
Never gonna run around and desert you...

HAHAHA be better boots !
    `;
    terminalContent.appendChild(rickRollDiv);
    rickRollSound.play();
    scrollToBottom();
    setTimeout(() => {
        rickRollSound.pause();
        window.location.reload();
    }, 10000);
}

// Fonction pour afficher l'aide
function showTerminalHelp() {
    const terminalContent = document.getElementById('terminalContent');
    const helpDiv = document.createElement('div');
    helpDiv.classList.add('terminal-output');
    helpDiv.innerHTML = `
Available commands:
• help - Show this help message
• cd [directory] - Change directory (presentation, projects, skills, services, contact)
• cd .. - Go back one level
• openproj -m [ID] - Open project modal (in projects directory)
• closeproj -m [ID] - Close project modal (in projects directory)
• goto [URL] - Open URL in new tab
• mkdir [name] - Create directory (requires root)
• su -i - Gain root privileges

Examples:
• cd projects
• cd ..
• openproj -m 0
• goto https://github.com/DeXils
    `;
    terminalContent.appendChild(helpDiv);
    scrollToBottom();
}

// Fonction pour afficher une erreur de commande
function showCommandError(message) {
    const terminalContent = document.getElementById('terminalContent');
    const errorDiv = document.createElement('div');
    errorDiv.classList.add('terminal-output', 'terminal-error');
    errorDiv.innerHTML = message;
    terminalContent.appendChild(errorDiv);
    scrollToBottom();
}

// Fonction pour afficher une sortie normale
function showTerminalOutput(message) {
    const terminalContent = document.getElementById('terminalContent');
    const outputDiv = document.createElement('div');
    outputDiv.classList.add('terminal-output');
    outputDiv.innerHTML = message;
    terminalContent.appendChild(outputDiv);
    scrollToBottom();
}

// Fonction pour ajouter à l'historique terminal
function addToTerminalHistory(command) {
    if (!command) return;
    
    const terminalContent = document.getElementById('terminalContent');
    const historyEntry = document.createElement('div');
    historyEntry.classList.add('terminal-history-entry');
    
    // Utiliser le chemin actuel affiché dans le terminal
    let currentPath = '~';
    if (terminalInputPath && terminalInputPath.innerText) {
        currentPath = terminalInputPath.innerText;
    }
    
    historyEntry.innerHTML = `<span class="terminal-prompt">DeXils@FrogInDev:${currentPath}$</span> ${command}`;
    terminalContent.appendChild(historyEntry);
    scrollToBottom();
}

// Fonction pour effacer le terminal
function clearTerminal() {
    const terminalContent = document.getElementById('terminalContent');
    terminalContent.innerHTML = '';
}

// Fonction pour ouvrir une section en mode interactif
function openSection(section) {
    // Sortir du mode terminal
    isTerminalMod = false;
    terminalMod.classList.add('terminal-input-hidden');
    
    // Appliquer le surlignage
    applyCurrentHighlight();
    
    // Naviguer vers la section
    switch(section) {
        case 'presentation':
            currentState = 'presentation';
            showPresentation();
            break;
        case 'projects':
            currentState = 'projects';
            showProjects();
            break;
        case 'skills':
            currentState = 'skills';
            showSkills();
            break;
        case 'services':
            currentState = 'services';
            showServices();
            break;
        case 'contact':
            currentState = 'contact';
            showContact();
            break;
    }
}

// Fonction pour sortir du mode terminal
function exitTerminalMode() {
    isTerminalMod = false;
    terminalMod.classList.add('terminal-input-hidden');
    applyCurrentHighlight();
}

// Fonction pour afficher une erreur de commande non trouvée
function showCommandNotFound(command) {
    showCommandError(`Command not found: ${command}<br>Type 'help' for available commands.`);
}

// Fonction pour faire défiler vers le bas du terminal
function scrollToBottom() {
    const terminalContent = document.getElementById('terminalContent');
    if (terminalContent) {
        terminalContent.scrollTop = terminalContent.scrollHeight;
    }
}



