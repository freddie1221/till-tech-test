
class Printer {
  constructor(order) {
    this.order = order
  }
  
  printItems() {
    let printout = []
    for (let x = 0; x < this.order.items.length; x++) {
      printout.push(`${this.order.items[x]}: $${this.order.itemCost(this.order.items[x])}`)
    }
    return printout
  }
  printOrder() {
    const co = new Object()
    co.name = `${this.order.name}'s order`
    co.items = this.printItems()
    co.total = this.order.total()
    co.tax = this.order.tax()
    return co
  }
}

module.exports = Printer