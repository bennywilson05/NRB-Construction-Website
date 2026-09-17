const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({
    path: path.join(__dirname, ".env")
});

const app = express();

const mongoURI = process.env.MONGODB_URI;

mongoose.connect(mongoURI)
    .then((result) => console.log("connected to MongoDB"))
    .catch((err) => console.log(err));

const frontendPath = path.join(__dirname, "..", "FrontEnd");

app.use(express.static(frontendPath, { index: "MainPage.html" }));

app.use((req, res) => {
    res.status(404).sendFile(path.join(frontendPath, "404.html"));
});

app.listen(3000, () => {
    console.log("Server Running on port 3000");
});