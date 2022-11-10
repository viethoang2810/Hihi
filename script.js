var canvas = document.querySelector('.heart-wrapper');
var ctx = canvas.getContext('2d');
ctx.beginPath();              
ctx.lineWidth = "10";
ctx.strokeStyle = "green";  // Green path
ctx.moveTo(0,20);
ctx.lineTo(50, 100);
ctx.stroke();
