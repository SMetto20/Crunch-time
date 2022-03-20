var filterval2 = 'blur(0px)'
var filterval = 'blur(3px)'

$(".order-marghe").click(function () {
    $(".form").show()
    $(".order-marghe").hide()
    $(".magherita-text").css('filter', filterval)
    $(".magherita-image").css('filter', filterval)
    $(".hawaian-text").css('filter', filterval)
    $(".hawaian").css('filter', filterval)


})

var form = document.getElementById("form")
var size = document.getElementById("size")
var crust = document.getElementById("crust")
var toppings = document.getElementById("toppings")
var form = document.getElementById("form")
var quantity = document.getElementById("quantity")
var delivery = document.getElementById("delivery")
var margherita = document.getElementById("margherita")
var hawaian = document.getElementById("hawaian")
var nyamachoma = document.getElementById("nyamachoma")
var vegeterian = document.getElementById("veggie")
var size = document.getElementById("size")
var crust = document.getElementById("crust")
var toppings = document.getElementById("toppings")
var submit = document.getElementById("submit")
margherita.addEventListener("click", function () {


})

hawaian.addEventListener("click", function () {

})

nyamachoma.addEventListener("click", function () {

})
vegeterian.addEventListener("click", function () {

})

form.addEventListener("submit", function (e) {
    e.preventDefault();
    
sizePrice()
crustPrice()
Total()
})

let amount = {
    large: 950,
    medium: 700,
    small: 450
}
let crustSize = {
    thick: 350,
    thin: 250,
    glutten: 450
}
let theToppings = {
    Extratopping: 300,
    Morderate: 200,
    Minimal: 100,
}

let pizza = {
    size: ['large', 'medium', 'small'],
    crust: ['thick', 'thin', 'glutten'],
    topping: ['Extratopping', 'Morderate', 'Minimal']
}

function sizePrice(){
    if(size.value===pizza.size[0]){
        return parseInt (amount.large)
    }else if(size.value===pizza.size[1]){
     return parseInt(amount.medium)
    }else if(size.value===pizza.size[2]){
        return parseInt(amount.small)
    }
}
function crustPrice(){
    if(crust.value === pizza.crust[0]){
        return parseInt (crustSize.thick)
    }else if(crust.value === pizza.crust[1]){
        return parseInt (crustSize.thin)
    }else if(crust.value === pizza.crust[2]){
        return parseInt (crustSize.glutten)
    }
}
function toppingPrice(){
    if(toppings.value=== pizza.topping[0]){
        return parseInt (theToppings.Extratopping)
    }else if(toppings.value=== pizza.topping[1]){
        return parseInt (theToppings.Morderate)
    }else if(toppings.value=== pizza.topping[2]){
        return parseInt (theToppings.Minimal)
    }
}

function Total(){
    alert((sizePrice()+crustPrice()+toppingPrice())*parseInt(quantity.value))
}