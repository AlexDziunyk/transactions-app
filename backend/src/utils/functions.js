const totalPrice = (price, quantity) => {
  return price * quantity;
};

const isEnoughBalance = (balance, totalPrice) => {
  return balance >= totalPrice;
};

const isEnoughInStock = (stock, quantity) => {
  return stock >= quantity;
};

module.exports = { totalPrice, isEnoughBalance, isEnoughInStock };
