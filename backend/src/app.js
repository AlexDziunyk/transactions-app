const express = require("express");
const dotenv = require("dotenv");
const ordersRoutes = require("./routes/ordersRouter");
const rateLimiter = require("./middlewares/rateLimiter");
const cors = require("cors");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/orders", rateLimiter, ordersRoutes);

module.exports = app;
