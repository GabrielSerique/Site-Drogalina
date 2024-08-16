if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", ready())
} else {
    ready()
}


function ready() {

    const RemoveProductButtons = document.getElementsByClassName("BotaoRemover")
for (let i = 0; i < RemoveProductButtons.length; i++) {
    RemoveProductButtons[i].addEventListener("click", removeProduct)
}

    const quantidadeInputs = document.getElementsByClassName("quantidadeDosProdutos")
    for (let i = 0; i < quantidadeInputs.length; i++) {
        quantidadeInputs[i].addEventListener("change", updateTotal)
    }

}

function removeProduct(event) {

    event.target.parentElement.parentElement.remove()
    updateTotal()

}

function updateTotal() {
    
let totalAmount = 0
const cartProducts = document.getElementsByClassName("cart-product")
    for (let i = 0; i < cartProducts.length; i++) {
        //console.log(cartProducts[i])
        const productPrice = cartProducts[i].getElementsByClassName("cart-product-price")[0].innerText.replace("R$", "").replace(",", ".")
        const productQuantity = cartProducts[i].getElementsByClassName("quantidadeDosProdutos")[0].value
        console.log(productPrice)
        
        
        totalAmount += productPrice * productQuantity
    }

    
totalAmount = totalAmount.toFixed(2)
totalAmount = totalAmount.replace(".", ",")
document.querySelector(".valorTotal span").innerText = `R$${totalAmount}` 

}