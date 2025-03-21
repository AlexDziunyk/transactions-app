const app = require("./app");
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to the db!"))
  .catch(() => console.log("Couldn't connect to the db!"));

app.listen(3001, () => console.log("Listening on port 3001"));
