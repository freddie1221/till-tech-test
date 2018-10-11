import Printer from '../lib/printer'

const mockOrder = jest.mock()
mockOrder.name = "John"
mockOrder.items = ["Cafe Latte", "Flat White"]
mockOrder.itemCost = jest.fn(() => '3.75')
mockOrder.total = jest.fn(() => '7.50')
mockOrder.tax = jest.fn(() => '2.80')
const printer = new Printer(mockOrder)

test('it returns a print out of the items with prices', () => {
  expect(printer.printItems()).toEqual(["Cafe Latte: $3.75", "Flat White: $3.75"])
})

test('it can return a print out of the whole order', () => {
  expect(printer.printOrder()).toEqual({
    "name": "John's order",
    "items": ["Cafe Latte: $3.75", "Flat White: $3.75"],
    "total": "7.50",
    "tax": "2.80"
  })
})
