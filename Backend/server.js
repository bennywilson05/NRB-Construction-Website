const express = require("express");
const path = require("path");

const app = express();

const frontendPath = path.join(__dirname, "..", "FrontEnd");

app.use(express.static(frontendPath, { index: "MainPage.html" }));

app.use((req, res) => {
    res.status(404).sendFile(path.join(frontendPath, "404.html"));
});

app.listen(3000, () => {
    console.log("Server Running on port 3000");
});