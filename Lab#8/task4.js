/* Task4.js - Add your Java Script Code Here */
function rolldice(){
  var p = document.getElementById("mydata");
  var total = 0;
  var previous = "";

  for (var i = 1; i <= 3; i++){

  var one = Math.floor( Math.random() * 6 ) +1;
  var two = Math.floor( Math.random() * 6 ) +1;
  total  = total + one + two;

  if (i==3){

    total = (total/3).toFixed(2);
    p.innerHTML = previous + one + " " + two + "<br>Average = " + total;
  }

  else{

    previous = previous + one + " " + two + ",";
  }
}
}

