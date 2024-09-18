const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./routes/user.js")


const app = express();
const port = process.env.PORT || 9000;

//middlewere
app.use(express.json());
app.use("/api", userRoutes);

//rutas
app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

//MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("CONNECTED TO MOGO ATLAS"))
  .catch((error) => console.log(error));

app.listen(port, () => console.log("Server listeninig on port", port));
