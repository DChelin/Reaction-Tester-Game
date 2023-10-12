let start = new Date().getTime();

//function to generate random color.

function getRandomColor(){

    const letters = '0123456789ABCDEF';

    let color = '#';
    for (let i = 0; i < 6; i++){

        color += letters[Math.floor(Math.random() * 16)];

    }

    return color;
}

//Setting function for shape to appear

function makeShapeAppear(){

    //setting variables for shape to randomly generate positioning and width.

    let top = Math.random() * 400;

    let left = Math.random() * 400;
    
    let width = (Math.random() * 200) + 100;

    //occasionally changing the shape to circle if the size is bigger than 0.5

    if(Math.random() > 0.5){

        document.getElementById("shape").style.borderRadius = "50%";

    } else {

        document.getElementById("shape").style.borderRadius = "0";
    }

    document.getElementById("shape").style.backgroundColor = getRandomColor();

    document.getElementById("shape").style.top = top + "px";

    document.getElementById("shape").style.left = left + "px";

    document.getElementById("shape").style.width = width + "px";

    document.getElementById("shape").style.height = width + "px";

    document.getElementById("shape").style.display = "block";

    start = new Date().getTime();
}

function appearAfterDelay(){

    setTimeout(makeShapeAppear, Math.random() + 1500);
}

appearAfterDelay();

document.getElementById("shape").onclick = function() {

    document.getElementById("shape").style.display = "none";

    let end = new Date().getTime();

    let timeTaken = (end - start) / 1000;

    document.getElementById("timeTaken").innerHTML = timeTaken + "s";

    appearAfterDelay();
}