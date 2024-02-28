 let firstnumber=document.getElementById("first")
 let secondnumber=document.getElementById("second")
 let buttoni=document.getElementById('button')
 let result=document.getElementById('result')
let addition=document.getElementById("add")
let substraction=document.getElementById("substract")
let diviSION=document.getElementById("divide")
let multiplication =document.getElementById('multiply')

    function additioning(){
         result.innerText=firstnumber.value+secondnumber.value
    }
    function substact(){
        result.innerText=firstnumber.value-secondnumber.value
   }
   function multiply(){
    result.innerText=firstnumber.value*secondnumber.value
}
function divisioning(){
    result.innerText=firstnumber.value/secondnumber.value
}
    
addition.addEventListener('click',additioning)
multiplication.addEventListener('click',multiply)
substraction.addEventListener('click',substact)
 diviSION.addEventListener('click',divisioning)