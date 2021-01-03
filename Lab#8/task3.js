/* Task3.js - Add your Java Script Code Here */
var global = 0;
function fivecent(value = 0.05){
    global = global + value;
    var p = document.getElementById("mydata");
    p.innerHTML = "Amount = $" + global.toFixed(2);
}
  
function tencent(value = 0.10){
    global = global + value;
    var p = document.getElementById("mydata");
    p.innerHTML = "Amount = $" + global.toFixed(2);
}
  
function twentyfivecent(value = 0.25){
    global = global + value;
    var p = document.getElementById("mydata");
    p.innerHTML = "Amount = $" + global.toFixed(2);
}
  
function onedollar(value = 1){
    global = global + value;
    var p = document.getElementById("mydata");
    p.innerHTML = "Amount = $" + global.toFixed(2);
}

function twodollar(value = 2){
    global = global + value;
    var p = document.getElementById("mydata");
    p.innerHTML = "Amount = $" + global.toFixed(2);
}
