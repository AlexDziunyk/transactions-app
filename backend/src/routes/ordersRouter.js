const express = require("express");
const router = express.Router();

const { createOrder, getOrderByUserId } = require('../controllers/ordersController');

router.post("/", createOrder);
router.get("/:userId", getOrderByUserId);

module.exports = router;