const Product = require("../models/product");
const User = require("../models/user");
const Order = require("../models/order");

const createOrder = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ error: "Such product doesn't exist!" });
    }

    if (quantity > product.stock) {
      return res.status(400).json({ error: "There are not enought products!" });
    }

    const totalPrice = product.price * quantity;
    const user = await User.findById(userId);

    if (totalPrice > user.balance) {
      return res.status(400).json({ error: "You have not enough money!" });
    }

    product.stock = product.stock - quantity;
    await product.save();

    user.balance = user.balance - totalPrice;
    await user.save();

    const order = new Order({
      userId: user.id,
      productId: product.id,
      quantity: quantity,
      totalPrice: totalPrice,
    });
    await order.save();

    return res.status(200).json({
      msg: "New order successfuly created!",
      data: order,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

const getOrderByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "Such user doesn't exist!" });
    }

    const orders = await Order.find({
      userId: userId,
    });

    return res.status(200).json({
      msg: "All orders of this user successfuly retrieved",
      data: orders,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { createOrder, getOrderByUserId };
