const {
  totalPrice,
  isEnoughBalance,
  isEnoughInStock,
} = require("../../src/utils/functions");

describe("Order Business Logic", () => {
  test("totalPrice returns correct value", () => {
    expect(totalPrice(11, 4)).toBe(44);
  });

  test("isEnoughInStock passes if enough in stock", () => {
    expect(isEnoughInStock(20, 6)).toBe(true);
  });

  test("isEnoughInStock fails if not enough in stock", () => {
    expect(isEnoughInStock(2, 10)).toBe(false);
  });

  test("isEnoughBalance passes if balance is enough", () => {
    expect(isEnoughBalance(100, 20)).toBe(true);
  });

  test("isEnoughBalance fails if balance is not enough", () => {
    expect(isEnoughBalance(10, 50)).toBe(false);
  });
});
