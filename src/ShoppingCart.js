class ShoppingCart {
    constructor() {
        this.items = []
    }

    getItems() {
        return this.items
    }

    addItem(name, quantity, pricePerUnit) {
        this.items.push({ name, quantity, pricePerUnit })
        return this.items
    }

    clear() {
        this.items.length = 0
        return this.items
    }

    total() {
        const total = this.items.reduce((price, currentItem) => {
            return currentItem.pricePerUnit * currentItem.quantity + price

        }, 0)

        return total

    }
}


const cart = new ShoppingCart()

// MY TESTS:

// console.log(cart.getItems()) 

//   console.log(cart.addItem("First item", 1, 99.99)) 
//   console.log(cart.addItem("Second item", 2, 1.99)) 
//   console.log(cart.addItem("Third item", 2, 100.00)) 

//   console.log(cart.getItems()) 

//   console.log(cart.clear()) 

//   console.log(cart.total()) 


module.exports = ShoppingCart
// console.log(module.exports)