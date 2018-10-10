import Order from '../lib/order'

let order = new Order()
let item = {"Cafe Latte": 4.75,}

test('Order can be instantiated',() => {
  expect(order).toBeInstanceOf(Order)
});

test('can have an item added to it',() => {
  order.addItem(item)
  expect(order.items.length).toBe(1)
});


// get something working

// module pattern, first?
// use ES6 syntax
// jest extension?