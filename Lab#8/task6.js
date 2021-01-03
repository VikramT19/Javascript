/* Task6.js - Add your Java Script Code Here */
var i=21;
function myFunction(){
    i = i-1; 
    var p = document.getElementById("mydata");
    p.innerHTML = i;
    if (i == 0){
        p.innerHTML = "liftoff!";
    }
}
