// const Order = require('../lib/order')
import Order from '../lib/order'

let order = new Order()
let item = "Cafe Latte"

test('Order can be instantiated',() => {
  expect(order).toBeInstanceOf(Order)
})

test('can have an item added to it',() => {
  order.addItem(item)
  expect(order.items.length).toBe(1)
})

test('it can return the total for the items',() => {
  order.addItem(item)
  expect(order.total()).toBe(9.50)
})

test('',() => {
  expect(order.tax()).toBe(0.82)
})

test('',() => {
  expect(order.itemCost(item)).toBe(4.75)
})
