const Order = require("../lib/order")
const Printer = require("../lib/printer")

const order = new Order("Test user")
const printer = new Printer(order)