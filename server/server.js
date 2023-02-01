const express = require("express");
const mongoose = require("mongoose");
// const Router = require("./routes");
const app = express();
const port = 4000;

// import { ApolloServer } from "@apollo/server";

const URI =
  "mongodb+srv://Zeitel42:balls@cluster0.yq509.mongodb.net/place-your-sets?retryWrites=true&w=majority";

async function connect() {
  try {
    await mongoose.connect(URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
}

connect();

app.listen(port, () => {
  console.log(`Listening on port ${port} `);
});

module.exports = app;
