var filterval2 = 'blur(0px)'
var filterval = 'blur(3px)'


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
var form2 = document.getElementById("form2")

var size2 = document.getElementById("size2")
var crust2 = document.getElementById("crust2")
var toppings2 = document.getElementById("toppings2")
var quantity2 = document.getElementById("quantity2")
var continue1 = document.getElementById("continue1")
var back1 = document.getElementById("back1")
var summary2 = document.getElementById("summary-2")

$(".order-marghe").click(function () {
    $(".form").show(function () {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            sizePrice()
            crustPrice()
            toppingPrice()
            Total()
            $(".summary-1").show()
            $(".form").hide()
        })
    })

    $(".order-marghe").hide()
    $(".magherita-text").css('filter', filterval)
    $(".magherita-image").css('filter', filterval)


})
$(".order-hawai").click(function () {
    $(".form").show(function () {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            sizePrice()
            crustPrice()
            Total()
            $(".summary-1").show()
            $(".form").hide()
        })
    })

    $(".order-marghe").hide()
    $(".magherita-text").css('filter', filterval)
    $(".magherita-image").css('filter', filterval)

})
$(".order-nyama").click(function () {
    $(".form-2").show(function () {
        form2.addEventListener("submit", function (e) {
            e.preventDefault();

            sizePrice2()
            crustPrice2()
            toppingPrice2()
            Total2()
            $(".summary-2").show(function(e){
                continue1.addEventListener("click",function(e){
                    e.preventDefault();
                    alert("almost there")
                    })
                    back1.addEventListener("click",function(e){
                        e.preventDefault();
                        $(".summary-2").hide();
                        $(".form-2").show()

                    })
            })
            
            $(".form-2").hide()

        })
    })

    $(".order-nyama").hide()
    $(".nyamachoma-text").css('filter', filterval)
    $(".nyamachoma-image").css('filter', filterval)


})
$(".order-veggie").click(function () {
    $(".form-2").show(function () {
        form2.addEventListener("submit", function (e) {
            e.preventDefault();

            sizePrice2()
            crustPrice2()
            toppingPrice2()
            Total2()
            $(".summary-2").show(function(e){
                continue1.addEventListener("click",function(e){
                    e.preventDefault();
                    alert("almost there")
                    })
                    back1.addEventListener("click",function(e){
                        e.preventDefault();
                        $(".summary-2").hide();
                        $(".form-2").show()

                    })
            })
            
            $(".form-2").hide()

        })
    })

    $(".order-nyama").hide()
    $(".nyamachoma-text").css('filter', filterval)
    $(".nyamachoma-image").css('filter', filterval)


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

function Total() {

    document.getElementById("summary-display").innerHTML = "</br>" + "</br>" + 'Pizza price' + ' ' + (sizePrice() * parseInt(quantity.value)) + "</br>" + 'Quantity' + '  ' + (quantity.value) + "</br>" + 'Crust price' + ' ' + (crustPrice() * parseInt(quantity.value)) + "</br>" + 'Topping price' + ' ' + (toppingPrice() * parseInt(quantity.value)) + "</br>" + "</br>" + 'total' + ' ' + ((sizePrice() + crustPrice() + toppingPrice()) * parseInt(quantity.value))

}

function Total2() {

    document.getElementById("summary-display2").innerHTML = "</br>" + "</br>" + 'Pizza price' + ' ' + (sizePrice2() * parseInt(quantity2.value)) + "</br>" + 'Quantity' + '  ' + (quantity2.value) + "</br>" + 'Crust price' + ' ' + (crustPrice2() * parseInt(quantity2.value)) + "</br>" + 'Topping price' + ' ' + (toppingPrice2() * parseInt(quantity2.value)) + "</br>" + "</br>" + 'total' + ' ' + ((sizePrice2() + crustPrice2() + toppingPrice2()) * parseInt(quantity2.value))

}
