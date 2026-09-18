const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require("dotenv");


dotenv.config({
    path: path.join(__dirname, ".env")
});

const app = express();
const RequestForm = require("./models/requestforms");
const ContactForm = require("./models/contactform");
const mongoURI = process.env.MONGODB_URI;

mongoose.connect(mongoURI)
    .then((result) => console.log("connected to MongoDB"))
    .catch((err) => console.log(err));

const frontendPath = path.join(__dirname, "..", "FrontEnd");

app.use(express.static(frontendPath));

app.get("/", (req, res) => {
    res.sendFile(path.join(frontendPath, "MainPage.html"));
});


app.get("/contact", (req, res) => {
    res.sendFile(path.join(frontendPath, "ContactPage.html"));
});


app.get("/gallery", (req, res) => {
    res.sendFile(path.join(frontendPath, "GalleryPage.html"));
});


app.use((req, res) => {
    res.status(404).sendFile(path.join(frontendPath, "404.html"));
});

app.listen(3000, () => {
    console.log("Server Running on port 3000");
});