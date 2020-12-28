// in Ex9 to Ex15, change the name of the following function properly
function fibonacci() {
  
  /* this statement defines an object reference to the 
     html element that its ID is "output".
	 Every time you want to output something, use outputObj */
  var outputObj=document.getElementById("output");

  // this statement receives some data and parses it to integer
  var a = parseInt(prompt("Please enter a number: ", ""));
  var secondLast=0;
  var last = 1;
  var newValue;
  var temp = a;


  /* this statement add some message to our output Object
     you would need to change the message to be appropriate in Ex10 to E15*/
 

  // translate rest of your flowcharts to js here:

  outputObj.innerHTML="number: "+temp+"<br><br>fibonacci : " + secondLast + "," + last;
  
  

for (var n = 2; n<a; n++){
   
    newValue = secondLast + last;
    secondLast = last ;
    last = newValue; 

outputObj.innerHTML=outputObj.innerHTML +  "," + newValue ;

}

  //the following statements inform the user that the program ended
  //and disable the button
  outputObj.innerHTML=outputObj.innerHTML+"<br><br>"+"program ended";
  document.getElementsByTagName("button")[0].setAttribute("disabled","true");
}