
let counter = 0;


function updateCounter() {
    document.getElementById("counter").textContent = counter;
}


function tickUp() {
    counter++;
    updateCounter();
}

function tickDown() {
    counter--;
    updateCounter();
}


function runForLoop() {
    let result = "";

    for (let i = 0; i <= counter; i++) {
        result += i + " ";
    }

    document.getElementById("forLoopResult").textContent = result.trim();
}


function showOddNumbers() {
    let result = "";

    for (let i = 1; i <= counter; i++) {
        if (i % 2 !== 0) {
            result += i + " ";
        }
    }

    document.getElementById("oddNumberResult").textContent = result.trim();
}



function addMultiplesToArray() {
    let arr = [];

    for (let i = counter; i >= 5; i--) {
        if (i % 5 === 0) {
            arr.push(i);
        }
    }

    console.log(arr);
}



function printCarObject() {
    let type = document.getElementById("carType").value;
    let mpg = document.getElementById("carMPG").value;
    let color = document.getElementById("carColor").value;

    let car = {
        cType: type,
        cMPG: mpg,
        cColor: color
    };

    console.log(car);
}


function loadCar(num) {
    let car;

    if (num === 1) {
        car = carObject1;
    } 
    else if (num === 2) {
        car = carObject2;
    } 
    else if (num === 3) {
        car = carObject3;
    }

    document.getElementById("carType").value = car.cType;
    document.getElementById("carMPG").value = car.cMPG;
    document.getElementById("carColor").value = car.cColor;
}

function changeColor(num) {
    let paragraph = document.getElementById("styleParagraph");

    if (num === 1) {
        paragraph.style.color = "red";
    } 
    else if (num === 2) {
        paragraph.style.color = "green";
    } 
    else if (num === 3) {
        paragraph.style.color = "blue";
    }
}
