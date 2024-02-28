 let firstnumber=parseInt(document.getElementById("first"))
 let secondnumber=parseInt(document.getElementById("second"))
 let buttoni=document.getElementById('button')
 let result=document.getElementById('result')
let addition=document.getElementById("add")
let substraction=document.getElementById("substract")
let diviSION=document.getElementById("divide")
let multiplication =document.getElementById('multiply')

    function additioning(){
         result.innerText=firstnumber +secondnumber
    }
    function substact(){
        result.innerText=firstnumber-secondnumber
   }
   function multiply(){
    result.innerText=firstnumber*secondnumber
}
function divisioning(){
    result.innerText=firstnumber/secondnumber
}
    
addition.addEventListener('click',additioning)
multiplication.addEventListener('click',multiply)
substraction.addEventListener('click',substact)
 diviSION.addEventListener('click',divisioning)