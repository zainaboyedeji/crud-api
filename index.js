const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route");

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//routes
app.use("/api/products",productRoute)

app.get("/", (req, res) => {
  res.send("Hello from Node API");
});



mongoose
  .connect(
    "mongodb+srv://zainaboyedeji95:Oyindamola95$@crudappdb.3ucmu.mongodb.net/Crud-API?retryWrites=true&w=majority&appName=CrudAppDB"
  )
  .then(() => {
    console.log("Connected to the database!");
    app.listen(3000, () => {
      console.log("Server running");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
