const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const rateLimit = require("express-rate-limit");


dotenv.config({
    path: path.join(__dirname, ".env")
});


const app = express();

const mongoURI = process.env.MONGODB_URI;

const formRoutes = require("./routes/formRoutes");


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


app.use(express.json({ limit: "10kb" }));


const formLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 10,
    standardHeaders: "draft-8",
    legacyHeaders: false,

    message: {
        message: "Too many form submissions. Please try again later."
    }
});


app.use("/api", formLimiter, formRoutes);


app.use((req, res) => {
    res.status(404).sendFile(path.join(frontendPath, "404.html"));
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server Running on port ${PORT}`);
});