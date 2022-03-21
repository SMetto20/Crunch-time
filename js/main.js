var filterval2 = 'blur(0px)'
var filterval = 'blur(3px)'


var form = document.getElementById("form")
var size = document.getElementById("size")
var crust = document.getElementById("crust")
var toppings = document.getElementById("toppings")
var form = document.getElementById("form")
var quantity = document.getElementById("quantity")
var margherita = document.getElementById("margherita")
var hawaian = document.getElementById("hawaian")
var nyamachoma = document.getElementById("nyamachoma")
var vegeterian = document.getElementById("veggie")
var size = document.getElementById("size")
var crust = document.getElementById("crust")
var toppings = document.getElementById("toppings")
var submit = document.getElementById("submit")
var form2 = document.getElementById("form2")

var size2 = document.getElementById("size2")
var crust2 = document.getElementById("crust2")
var toppings2 = document.getElementById("toppings2")
var quantity2 = document.getElementById("quantity2")
var continue1 = document.getElementById("continue1")
var back1 = document.getElementById("back1")
var continue2 = document.getElementById("continue2")
var back = document.getElementById("back")
var summary2 = document.getElementById("summary-2")
var cancel = document.getElementById("cancel")
var cancel2= document.getElementById("cancel2")
var delivery = document.getElementById("delivery")
var delivery2= document.getElementById("delivery2")
var location1 = document.getElementById("location")
var location2 = document.getElementById("location2")

$(".order-marghe").click(function () {
    $(".form").show(function () {
        $(".order-marghe").hide()
        $(".magherita-text").css('filter', filterval)
        $(".magherita-image").css('filter', filterval)
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            sizePrice()
            crustPrice()
            toppingPrice()
            Total()
            deliveryAnounce()
            $(".summary-1").show(function(e){
                continue2.addEventListener("click", function (e) {
                    e.preventDefault();
                    document.location.href ="end.html"
                    
                })
                back.addEventListener("click", function (e) {
                    e.preventDefault();
                    $(".summary-1").hide();
                    $(".form").show()

                })

            })
            $(".form").hide()
        })
        cancel.addEventListener("click", function (e) {
            $(".form").hide()
            $(".order-marghe").show()
            $(".magherita-text").css('filter', filterval2)
            $(".magherita-image").css('filter', filterval2)
        })
    })




})
$(".order-hawai").click(function () {
    $(".form").show(function () {
        $(".order-marghe").hide()
        $(".magherita-text").css('filter', filterval)
        $(".magherita-image").css('filter', filterval)
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            sizePrice()
            crustPrice()
            toppingPrice()
            deliveryAnounce()
            Total()
            $(".summary-1").show(function(e){
                continue2.addEventListener("click", function (e) {
                    e.preventDefault();
                    document.location.href ="end.html"
                    
                })
                back.addEventListener("click", function (e) {
                    e.preventDefault();
                    $(".summary-1").hide();
                    $(".form").show()

                })

            })
            $(".form").hide()
        })
        cancel.addEventListener("click", function (e) {
            $(".form").hide()
            $(".order-marghe").show()
            $(".magherita-text").css('filter', filterval2)
            $(".magherita-image").css('filter', filterval2)
        })
    })




})

$(".order-nyama").click(function () {
    $(".form-2").show(function () {
        $(".order-nyama").hide()
    $(".nyamachoma-text").css('filter', filterval)
    $(".nyamachoma-image").css('filter', filterval)
        form2.addEventListener("submit", function (e) {
            e.preventDefault();

            sizePrice2()
            crustPrice2()
            toppingPrice2()
            deliveryAnounce2()
            Total2()
            $(".summary-2").show(function (e) {
                continue1.addEventListener("click", function (e) {
                    e.preventDefault();
                    document.location.href ="end.html"
                })
                back1.addEventListener("click", function (e) {
                    e.preventDefault();
                    $(".summary-2").show(function(e){
                        continue2.addEventListener("click", function (e) {
                            e.preventDefault();
                            document.location.href ="end.html"
                            
                        })
                        back.addEventListener("click", function (e) {
                            e.preventDefault();
                            $(".summary-2").hide();
                            $(".form-2").show()
        
                        })
        
                    })
                    $(".form-2").show()

                })
            })
            
            $(".form-2").hide()

        })
        cancel2.addEventListener("click", function (e) {
            $(".form-2").hide()
            $(".order-nyama").show()
            $(".nyamachoma-text").css('filter', filterval2)
            $(".nyamachoma-image").css('filter', filterval2)
    
        })

        })
        
        
    })
    $(".order-veggie").click(function () {
        $(".form-2").show(function () {
            $(".order-nyama").hide()
        $(".nyamachoma-text").css('filter', filterval)
        $(".nyamachoma-image").css('filter', filterval)
            form2.addEventListener("submit", function (e) {
                e.preventDefault();
    
                sizePrice2()
                crustPrice2()
                toppingPrice2()
                deliveryAnounce2()
                Total2()
                $(".summary-2").show(function(e){
                    continue2.addEventListener("click", function (e) {
                        e.preventDefault();
                        document.location.href ="end.html"
                        
                    })
                    back1.addEventListener("click", function (e) {
                        e.preventDefault();
                        $(".summary-2").hide();
                        $(".form-2").show()
    
                    })
                })
                
                $(".form-2").hide()
    
            })
            cancel2.addEventListener("click", function (e) {
                $(".form-2").hide()
                $(".order-nyama").show()
                $(".nyamachoma-text").css('filter', filterval2)
                $(".nyamachoma-image").css('filter', filterval2)
            })
    
            })
            
            
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
var deliveryPrice = 350

function sizePrice() {
    if (size.value === pizza.size[0]) {
        return parseInt(amount.large)
    } else if (size.value === pizza.size[1]) {
        return parseInt(amount.medium)
    } else if (size.value === pizza.size[2]) {
        return parseInt(amount.small)
    }
}

function crustPrice() {
    if (crust.value === pizza.crust[0]) {
        return parseInt(crustSize.thick)
    } else if (crust.value === pizza.crust[1]) {
        return parseInt(crustSize.thin)
    } else if (crust.value === pizza.crust[2]) {
        return parseInt(crustSize.glutten)
    }
}

function toppingPrice() {
    if (toppings.value === pizza.topping[0]) {
        return parseInt(theToppings.Extratopping)
    } else if (toppings.value === pizza.topping[1]) {
        return parseInt(theToppings.Morderate)
    } else if (toppings.value === pizza.topping[2]) {
        return parseInt(theToppings.Minimal)
    }
}

function sizePrice2() {
    if (size2.value === pizza.size[0]) {
        return parseInt(amount.large)
    } else if (size2.value === pizza.size[1]) {
        return parseInt(amount.medium)
    } else if (size2.value === pizza.size[2]) {
        return parseInt(amount.small)
    }
}

function crustPrice2() {
    if (crust2.value === pizza.crust[0]) {
        return parseInt(crustSize.thick)
    } else if (crust2.value === pizza.crust[1]) {
        return parseInt(crustSize.thin)
    } else if (crust2.value === pizza.crust[2]) {
        return parseInt(crustSize.glutten)
    }
}

function toppingPrice2() {
    if (toppings2.value === pizza.topping[0]) {
        return parseInt(theToppings.Extratopping)
    } else if (toppings2.value === pizza.topping[1]) {
        return parseInt(theToppings.Morderate)
    } else if (toppings2.value === pizza.topping[2]) {
        return parseInt(theToppings.Minimal)
    }
}
function deliveryCheck(){
    if(delivery.value==='yes'){
     return parseInt (deliveryPrice)
    

    }else{
        return 0
    }
}

function deliveryAnounce(){
    if(delivery.value==='yes'){

    alert("your meal will be deliverd to"+' '+(location1.value))
} else{
    alert ('wait 15 minutes to pick your meal')
}}

function deliveryAnounce2(){
    
    if(delivery2.value==='yes'){
        alert("your meal will be deliverd to "+' '+(location2.value))
    } else{
        alert ('wait 15 minutes to pick your meal')
}}
function deliveryCheck2(){
    if(delivery2.value=== "yes"){
   return parseInt(deliveryPrice)

    }else{
        return 0
    }
}

function Total() {

    document.getElementById("summary-display").innerHTML = "</br>" + "</br>" + 'Pizza price' + ' ' + (sizePrice() * parseInt(quantity.value)) + "</br>" + 'Quantity' + '  ' + (quantity.value) + "</br>" + 'Crust price' + ' ' + (crustPrice() * parseInt(quantity.value)) + "</br>" + 'Topping price' + ' ' + (toppingPrice() * parseInt(quantity.value)) + "</br>" +'Delivery price'+ ' '+(deliveryCheck())+"</br>"+'total' + ' ' + ((sizePrice() + crustPrice() + toppingPrice()) * parseInt(quantity.value)+ deliveryCheck())
    
}

function Total2() {

    document.getElementById("summary-display2").innerHTML = "</br>" + "</br>" + 'Pizza price' + ' ' + (sizePrice2() * parseInt(quantity2.value)) + "</br>" + 'Quantity' + '  ' + (quantity2.value) + "</br>" + 'Crust price' + ' ' + (crustPrice2() * parseInt(quantity2.value)) + "</br>" + 'Topping price' + ' ' + (toppingPrice2() * parseInt(quantity2.value)) + "</br>" +'Delivery price'+' '+(deliveryCheck2())+"</br>" + 'total' + ' ' + ((sizePrice2() + crustPrice2() + toppingPrice2()) * parseInt(quantity2.value)+ deliveryCheck2())

}

