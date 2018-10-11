const Order = require("../lib/order")
const Printer = require("../lib/printer")

const order = new Order("John")
const printer = new Printer(order)
const item = "Cafe Latte"

order.addItem(item)
order.addItem(item)

order.total()
order.tax()
order.itemCost(item)

test('it can build and print out an order',() => {
  expect(printer.printOrder()).toEqual({
    "items": ["Cafe Latte: $4.75", "Cafe Latte: $4.75"], 
    "name": "John's order",
    "tax": 0.82, "total": 9.5
  })
})

