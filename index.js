// Variables;

var activeDress, dressChoice, dress1, dress2, dress3, dress4;

activeDress = [0,0];

dressChoice = document.querySelectorAll(".dress");

nakedDoll = document.querySelector(".doll");

dress1 = document.querySelector(".dress-1");

dress2 = document.querySelector(".dress-2");

dress3 = document.querySelector(".dress-3");

dress4 = document.querySelector(".dress-4");

// Functions;

function changeHeading(color) {
	document.querySelector("h1").innerHTML = color + " is an excellent choice! Good job!";
}

function takeDressOff() {
	var previousDress = activeDress[1];
					
					switch(previousDress) {
						case 1:
							dress1.style.opacity = "0%";
							dressChoice[0].classList.remove("hidden-text");
						break;
						
						case 2:
							dress2.style.opacity = "0%";
							dressChoice[1].classList.remove("hidden-text");
						break;
						
						case 3:
							dress3.style.opacity = "0%";
							dressChoice[2].classList.remove("hidden-text");
						break;
						
						case 4:
							dress4.style.opacity = "0%";
							dressChoice[3].classList.remove("hidden-text");
						break;
					}
}

function defaultView() {
		nakedDoll.style.opacity = "100%"
		dress1.style.opacity = "0%";
		dress2.style.opacity = "0%";
		dress3.style.opacity = "0%";
		dress4.style.opacity = "0%";
		dressChoice[0].classList.remove("hidden-text");
		dressChoice[1].classList.remove("hidden-text");
		dressChoice[2].classList.remove("hidden-text");
		dressChoice[3].classList.remove("hidden-text");
}

// Action;

for (var i=0; i<dressChoice.length; i++) {
    dressChoice[i].addEventListener("click", function() {
        switch (this.innerText) {
            case "a":
                activeDress.unshift(1)
				activeDress.pop(activeDress[2])
				dress1.style.opacity = "100%";
				changeHeading("White");
				this.classList.add("hidden-text");
				takeDressOff();
				nakedDoll.style.opacity = "0%";
            break; 
			
            case "b":
                activeDress.unshift(2)
				activeDress.pop(activeDress[2])
				dress2.style.opacity = "100%";
				changeHeading("Green");
				this.classList.add("hidden-text");
				takeDressOff();	
				nakedDoll.style.opacity = "0%";
            break;
			
            case "c":
                activeDress.unshift(3)
				activeDress.pop(activeDress[2])
				dress3.style.opacity = "100%";
				changeHeading("Purple");
				this.classList.add("hidden-text");
				takeDressOff();
				nakedDoll.style.opacity = "0%";
            break; 
			
            case "d":
                activeDress.unshift(4)
				activeDress.pop(activeDress[2])
				dress4.style.opacity = "100%";
				changeHeading("Pink");
				this.classList.add("hidden-text");
				takeDressOff();
				nakedDoll.style.opacity = "0%";
            break; 
        }
		if (activeDress[0] === activeDress[1]) {
					defaultView();
				}
    });
}