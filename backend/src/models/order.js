const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  userId: {
    type: String,
    ref: "User",
    required: true,
  },
  productId: {
    type: String,
    ref: "Product",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  totalPrice: {
    type: Number,
  },
  createdAt: { type: Date, default: Date.now },
});

const Order = mongoose.model("orderSchema", orderSchema);
module.exports = Order;
