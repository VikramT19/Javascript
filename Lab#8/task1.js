/* Task1.js - Add your Java Script Code Here */
function myFunction()
{
  var p = document.getElementById("mydata");

  // set p.innerHTML equal to heads or tails

  var n = Math.random(); 

  if (n >= 0.5){
    p.innerHTML = "tails";
  }

    else{
      p.innerHTML = "heads";
    }

}
