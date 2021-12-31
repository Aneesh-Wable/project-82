var mouseEvent = "empty";

var lastPositionOfX, lastPositionOfY;

canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");

color = "black";

width  = 1;

canvas.addEventListener ("mousedown", myMousedown);

function myMousedown (e){

color = document.getElementById("color").value;
width = document.getElementById("width").value;
radius = document.getElementById("radius").value;

mouseEvent = "mousedown";
}


canvas.addEventListener ("mousemove", myMousemove);

function myMousemove (e) {
 
    currentPositionOfMouseX= e.clientX-canvas.offsetLeft;

    currentPositionOfMouseY = e.clientY-canvas.offsetTop;

    if (mouseEvent == "mousedown"){

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        console.log("Last Positon Of X and Y coordinates=");
        console.log("x = "+ lastPositionOfX + "y = " + lastPositionOfY);
        ctx.moveTo(lastPositionOfX, lastPositionOfY);
        console.log("Current Positon Of X and Y coordinates=");
        console.log("x = "+ currentPositionOfMouseX + "y = " + currentPositionOfMouseY);

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.arc(currentPositionOfMouseX, currentPositionOfMouseY, radius, 0, 2*Math.PI);
       
        ctx.stroke();
    }
        lastPositionOfX = currentPositionOfMouseX;

        lastPositionOfY = currentPositionOfMouseY;
}

canvas.addEventListener("mouseup", MyMouseUP);

function MyMouseUP(e){

    mouseEvent = "mouseup";
    

}

canvas.addEventListener("mouseleave", MyMouseLeave);
function MyMouseLeave(e){

    mouseEvent = "mouseleave";
    

}