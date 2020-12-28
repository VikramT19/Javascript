// in Ex2 to Ex8, change the name of the following function properly
// also, update pre/post conditions accordingly
function equation() {

        num1 >= 0;
        num2 >= 0;
        num3 >= 0;
        
  
   var a = parseInt(document.getElementById("num1").value);
   var b = parseInt(document.getElementById("num2").value);
   var c = parseInt(document.getElementById("num3").value);
  
   var t1 = b*b;
   var t2 = 4*a*c;
   

    if(t1>t2){ 
        document.getElementById("output").innerHTML = "It has 2 distinct roots";
    }

    if(t1==t2){
    
        document.getElementById("output").innerHTML = "Its roots are identical";

       
    }
    if(t1<t2){
        document.getElementById("output").innerHTML = "it has no roots in real numbers";

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
