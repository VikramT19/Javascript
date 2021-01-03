/* Task5.js - Add your Java Script Code Here */
function update(){
  var p = document.getElementById("mydata");
  var d = new Date();
  var day = d.getDate();
  var year = d.getFullYear();
  var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];
  p.innerHTML = "Today is " + days[d.getDay()].concat("," + "<br>" + months[d.getMonth()].concat(" " +day + ", ") + year);


}
  