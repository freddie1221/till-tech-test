
const shop = require('../hipstercoffee.json');

class Order {
  constructor() {
    this.items = []
  }
  addItem(item){
    this.items.push(item)
  } 
  
  itemCost(item) {
    return shop[0].prices[0][item]
  }
  
  total() {
    if (this.items.length === 0) {
      console.log("Nothing has been added to the order!")
      // TODO would be good to have some kind of "raise" in here to stop execution of dependent methods
    } else {
      let total = 0
      for(let x = 0; x < this.items.length; x ++){
        total += this.itemCost(this.items[x])
      }
      return total
    }
  }

  tax() {
    let tax = this.total() * 0.0864
    return parseFloat(tax.toFixed(2))
  }
  
}

module.exports = Order

// ? how does resolving a module (e.g. through NPM) differ from resolving a file in my own code
// ? how do I export something. I want code to be available through the module system. How does that work
// ? How do I specify what i want other files to be able to take form this one