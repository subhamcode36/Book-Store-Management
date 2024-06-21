const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();

// Middlewares

app.use(express.json());
app.use(cors());
app.use("/books", router); // localhost:5000/books


mongoose.connect(
    "mongodb+srv://admin:FtfoVWPdFtOsC6b8@cluster0.0jql7is.mongodb.net/book-store?retryWrites=true&w=majority&appName=Cluster0"
  )
  //in the above line original password and username is written
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));

//FtfoVWPdFtOsC6b8 this is the password