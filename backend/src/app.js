const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const ordersRoutes = require("./routes/ordersRouter");
const rateLimiter = require("./middlewares/rateLimiter");
const cors = require('cors');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/orders", rateLimiter, ordersRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to the db!"))
  .catch(() => console.log("Couldn't connect to the db!"));

app.listen(3001, () => console.log("Listening..."));
