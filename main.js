canvas= document.getElementById("myCanvas");

ctx=canvas.getContext("2d");

colour = "red";


ctx.beginPath();
ctx.strokeStyle=colour;
ctx.lineWidth=10;
ctx.arc(500,400,60,0,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e) {
    mouseX = e.clientX-canvas.offsetLeft;
    mouseY = e.clientY-canvas.offsetTop;

    circle(mouseX,mouseY)
    
    colour=document.getElementById("color").value ;

    document.getElementById("myCanvas").style.background=document.getElementById("background").value

}

function circle(mouseX,mouseY) {
    
    ctx.beginPath();
ctx.strokeStyle=colour;
ctx.lineWidth=10;
ctx.arc(mouseX,mouseY,60,0,2*Math.PI);
ctx.stroke();
}

function clearArea() {
    ctx.clearRect(0,0,canvas.width,canvas.height)
}