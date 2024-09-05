let inScreen=document.querySelector("#Screen");
let buttons=document.querySelectorAll(".number");
let add=document.querySelector(".addition");
let sub=document.querySelector(".subtraction");
let per=document.querySelector(".Percentage");
let divi=document.querySelector(".Divide");
let mut=document.querySelector(".multiplication");
let result=document.querySelector(".result");
let addturnn=false;
let subturnn=false;
let perturnn=false;
let diviturnn=false;
let mutturnn=false;
    add.onclick=function(){
        addturnn=true;
        subturnn=false;
        perturnn=false;
        diviturnn=false;
        mutturnn=false;
    }
    mut.onclick=function(){
        addturnn=false;
        subturnn=false;
        perturnn=false;
        diviturnn=false;
        mutturnn=true;
    }
    divi.onclick=function(){
        addturnn=false;
        subturnn=false;
        perturnn=false;
        diviturnn=turn;
        mutturnn=false;
    }
    per.onclick=function(){
        addturnn=false;
        subturnn=true;
        perturnn=false;
        diviturnn=false;
        mutturnn=false;
        
    }
    sub.onclick=function(){
        addturnn=false;
        subturnn=true;
        perturnn=false;
        diviturnn=false;
        mutturnn=false;
        
    }
a=0;
res=0;
buttons.forEach(button =>{
    button.onclick=function(){
        inScreen.innerText=button.innerText;
        let b=parseInt(button.innerText);
        if(addturnn==true){
            res=a+b;
            a=res;
        }
        inScreen.innerText=res;
    }
});