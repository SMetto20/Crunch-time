var form = document.getElementById("form")
var size = document.getElementById("size")
var crust = document.getElementById("crust")
var toppings = document.getElementById("toppings")
var form = document.getElementById("form")
var quantity = document.getElementById("quantity")
var delivery= document.getElementById("delivery")
var margherita = document.getElementById("margherita")
var hawaian = document.getElementById("hawaian")
var nyamachoma = document.getElementById("nyamachoma")
var vegeterian = document.getElementById("veggie")
var size =document.getElementById("size")
var crust =document.getElementById("crust")
var submit=document.getElementById("submit")

margherita.addEventListener("click", function () {
    
    
})

hawaian.addEventListener("click", function () {
    
})

nyamachoma.addEventListener("click", function () {
    
})
vegeterian.addEventListener("click", function () {
    
})
 
form.addEventListener("submit",function(e){
    e.preventDefault();
    priceCheck()
})

function priceCheck(){
    if(size.value =="large" && crust.value =="thick"){
        console.log(950+8)
       }
}

// let pizzamarghe1 ={
//     pizazsize:size[1]
    
// }
