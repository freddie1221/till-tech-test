const Order = require("../lib/order")
const Printer = require("../lib/printer")

const order = new Order()
const printer = new Printer(order)
const item = "Cafe Latte"

order.addItem(item)
order.addItem(item)

order.total()
order.tax()
order.itemCost(item)


printer.printItems()