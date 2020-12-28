// in Ex2 to Ex8, change the name of the following function properly
// also, update pre/post conditions accordingly
function mapping() {

        num1 >= 0;

        var a = parseInt(document.getElementById("num1").value);
    
  
    if(a>89){
        document.getElementById("output").innerHTML = "A+";

    }

    
    else if(a>79){
        document.getElementById("output").innerHTML = "A";

    }
    
    else if(a>75){
        document.getElementById("output").innerHTML = "B+";

    }
    
    else if(a>70){
        document.getElementById("output").innerHTML = "B";

    }
    
    else if(a>65){
        document.getElementById("output").innerHTML = "C+";

    }

    else if(a>60){
        document.getElementById("output").innerHTML = "C";

    }
    
    else if(a>55){
        document.getElementById("output").innerHTML = "D+";

    }


    else if(a>50){
        document.getElementById("output").innerHTML = "D";

    }
    
    else if(a>40){
        document.getElementById("output").innerHTML = "E";

    }
    else if(a<40){
        document.getElementById("output").innerHTML = "F";

    }

    

}
