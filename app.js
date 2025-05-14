let terminal = document.getElementById('terminal');
let logoFrogInDev = document.getElementById('logoFrogInDev');
let columnTerminal = document.getElementById('columnTerminal');
let pressStart = document.getElementById('pressStart');
let terminalMod = document.getElementById('terminalMod');
let inputTerminal = document.getElementById('inputTerminal');

let startSound = new Audio("start.mp3");


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
			},300);
			
		},2000);
	}, 600)
	
}

function showTerminal() {
	switchTerminalMod();
	const columnTerminalUser = document.createElement('div');
	columnTerminalUser.classList.add('terminal-user');
	terminal.appendChild(columnTerminalUser);
	
	const welcomeTerminal = document.createElement('span');
	welcomeTerminal.classList.add('terminal-span');
	welcomeTerminal.innerText = "Welcome to FrogInDev Environment\n You can use your keyboard arrows ↑↓ to navigate and use ↵ to validate. \nYou can also switch to a terminal mod with the combination ctrl + space"
	columnTerminalUser.appendChild(welcomeTerminal);
	
	const presentationOption = document.createElement('span');
	presentationOption.classList.add('terminal-span');
	presentationOption.innerText = "\n- Presentation of FrogInDev";
	columnTerminalUser.appendChild(presentationOption);
}

function switchTerminalMod() {
	window.addEventListener('keydown', function(event) {
		// Vérification si les touches Ctrl et Espace sont pressées
		if (event.ctrlKey && event.code === 'Space') {
			console.log(terminalMod.classList[1]);
			if(terminalMod.classList[1] === "terminal-input-hidden") {
				terminalMod.classList.remove('terminal-input-hidden');
			}else {
				terminalMod.classList.add('terminal-input-hidden');
			}
		}
	});
}


