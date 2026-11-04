let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");

let res = document.getElementById("res");

let numBtns = document.querySelectorAll(".num-btn");

let backspace = document.getElementById("backspace");
backspace.addEventListener("click", function(){
    activeInput.value = activeInput.value.slice(0,-1);

})

let activeInput =num1;

num2.addEventListener("focus", function(){
    activeInput =num2;
});

num1.addEventListener("focus", function(){
    activeInput =num1;
});

numBtns.forEach(function(btn){
    btn.addEventListener("click",function(){
            activeInput.value += btn.textContent;

    });
    
});

// let a =Number(num1.value);
// let b =Number(num2.value);
// console.log(a);
// console.log(b);

let add =document.getElementById("add");

add.addEventListener("click",function(){
    let a =Number(num1.value);
    let b =Number(num2.value);
    let sum = a+b;
    res.textContent = "result:" + sum;

});

let sub =document.getElementById("sub");

sub.addEventListener("click",function(){
    let a =Number(num1.value);
    let b =Number(num2.value);
    let sub = a-b;
    res.textContent = "result:" + sub;

});

let mul =document.getElementById("mul");

mul.addEventListener("click",function(){
    let a =Number(num1.value);
    let b =Number(num2.value);
    let mul = a*b;
    res.textContent = "result:" + mul;

});

let divi =document.getElementById("divi");

divi.addEventListener("click",function(){
    let a =Number(num1.value);
    let b =Number(num2.value);
    
    let divi= a/b;
    if(b===0){
    res.textContent ="cannot divide by zero";
    } else{
        let divi= a/b;
    res.textContent = "result:" + divi;
    }
});

let clr =document.getElementById("clr");
clr.addEventListener("click",function(){
    num1.value ="";
    num2.value ="";

    activeInput = num1;

    res.textContent ="result";

});




