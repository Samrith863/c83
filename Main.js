var last_position_x,last_position_y;
var mouseEvent="empty";

canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
   mouseEvent="mousedown";
    
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
   mouseEvent="mouseup";
    
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
   mouseEvent="mouseleave";
    
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    mouse_x=e.clientX-canvas.offsetLeft;
    mouse_y=e.clientY-canvas.offsetTop;
if(mouseEvent=="mousedown"){
    ctx.beginPath();
    ctx.strokeStyle="red";
    ctx.lineWidth=3;
    ctx.moveTo(last_position_x,last_position_y);
    ctx.lineTo(mouse_x,mouse_y);
    ctx.stroke();       
}
  last_position_x=mouse_x;
  last_position_y=mouse_y;
}
var last_position_touch_x,last_position_touch_y;
var width=screen.width;
new_width=screen.width-70;
new_height=screen.height-300;
if (width<992){
    document.getElementById("mycanvas").width=new_width;
    document.getElementById("mycanvas").height=new_height;
    document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e){
  last_position_touch_x=e.touches[0].clientX-canvas.offsetLeft;
  last_position_touch_y=e.touches[0].clientY-canvas.offsetTop;  
}
canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e){
    current_position_touch_x=e.touches[0].clientX-canvas.offsetLeft;
  current_position_touch_y=e.touches[0].clientY-canvas.offsetTop;  

    ctx.beginPath();
    ctx.strokeStyle="red";
    ctx.lineWidth=3;
    ctx.moveTo(last_position_touch_x,last_position_touch_y);
    ctx.lineTo(current_position_touch_x,current_position_touch_y);
    ctx.stroke();       

  last_position_touch_x=current_position_touch_x;
  last_position_touch_y=current_position_touch_y;
}