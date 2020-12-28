// in Ex2 to Ex8, change the name of the following function properly
// also, update pre/post conditions accordingly
function equation() {

        num1 >= 0;
        num2 >= 0;
        num3 >= 0;
        d>=0;
  
   var a = parseInt(document.getElementById("num1").value);
   var b = parseInt(document.getElementById("num2").value);
   var c = parseInt(document.getElementById("num3").value);
  
   var d = b*b-4*a*c
   var n = d.toFixed(2);

    if(d>=0){ 

        var x1 = (b+Math.sqrt(d))/2*a
        var x2 = (-b+Math.sqrt(d))/2*a

        document.getElementById("output").innerHTML = "One root : " + x1 + " Another : "  + x2;
       
        
    }

    if(d<0){
        
        var p = -b/2*a
        var q = Math.sqrt(Math.abs(d))/2*a

        var b = q.toFixed(2);

        document.getElementById("output").innerHTML = "Roots : " + p + "+" + b + "i" + " Another : " + p + "-" + b + "i";
       
    }
  
   /* in Ex5, you should delete from Line 15 to this line */

   /*   //in Ex 5, uncomment this block
   switch (true){
    case (a>89): 
       answer="A+";
       break;
    case (a>79): 
       answer="A";
       break;
       // in Ex5, you need to add more cases for other letter grades
    default:
       answer="F";
   }
   */

   /* in Ex2 to Ex5, you need to renmae "sum" to make it more relevant
      to those problems, you may also need to rename s to a better 
      varibale that you have in your formulas above */
   
   
    

}
