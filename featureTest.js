const Order = require("../lib/order")

const order = new Order()
const item = "Cafe Latte"

order.addItem(item)
order.addItem(item)

order.total()
order.tax()
order.itemCost(item)