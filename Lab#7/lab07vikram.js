function problem1(){

    var outputObj=document.getElementById("output");
    var num = parseInt(prompt("Please enter a number: ", ""));
    var d = 2, prime = true;

    while(prime = true && d <= num/2){
        if (num % d ==0){

            prime  == false;
            break;
        }
        d= d + 1 ;
    }
    
    if (prime  == true){
        outputObj.innerHTML= num + " is not prime";
    }

    else{
        outputObj.innerHTML= num + " is prime";
    }
}

function problem2(){

    var outputObj=document.getElementById("output");
    var sum1 = 0, sum2 = 0;

    for (var i = 1; i <= 4; i++){
        var num = parseInt(prompt("Please enter a number: ", ""))
        sum1 = sum1 + num;
    }

    for (var i = 1; i <= 4; i++){
        var num = parseInt(prompt("Please enter a number: ", ""))
        sum2 = sum2 + num;
    }

    if (sum1==sum2){
        outputObj.innerHTML= "yes";
    }

    else{
        outputObj.innerHTML= "no";
    }
}

function problem3(){

    var p = 0;
    var n = 0;

    do {
        var num = parseInt(prompt("Please enter a number: ", ""));

        if (num > 0){
            p = p + 1;
            
            if (num < 0){
                n = n + 1;
            }
        }
    }
    while (num != 0 && p <= 2*n);
}

function problem4(){

    var outputObj=document.getElementById("output");
    var cnt1 = 0, cnt2 = 0;

    for (var i = 1; i <=4; i++){
        var num = parseInt(prompt("Please enter a number: ", ""));

        if (num < 0){
            cnt1 = cnt1 + 1;
        }
    }

    for (var i = 1; i <=4; i++){
        var num = parseInt(prompt("Please enter a number: ", ""));

        if (num > 0){
            cnt2 = cnt2 + 1;
        }
    }

    if (cnt2 == cnt1){
        outputObj.innerHTML= "yes";
    }

    else{
        outputObj.innerHTML= "no";
    }
}

function problem5(){

    var outputObj=document.getElementById("output");
    var num = parseInt(prompt("Please enter a number: ", ""));

    for (var i = 2; i <= num; i++){
        if(prime(i) == true){
            outputObj.innerHTML+= i + ",";
        }
    }
}

function prime(num){

    var flag  = true, d = 2;
    while(flag == true && d <= num/2){
        if(num % d ==0) {
           flag  = false;
           break;
        }
       d = d + 1;
    }
    return flag;
}

function problem6(){

    var outputObj=document.getElementById("output");
    var num = parseInt(prompt("Please enter a number: ", ""));

    for (var i = 2; i <= num; i++){
        if(prime(i) == true && has7(i)==true){
            outputObj.innerHTML+= i + ",";
        }
    }
}

function has7(num){
    var flag = false;

    while(num > 0){
        if (num % 10 ==7){
            flag  = true;
        }
        num = parseInt(num/10);
    }
    return flag;
}