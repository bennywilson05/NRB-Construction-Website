const express = require("express");
const router = express.Router();

const requestForm = require("../models/requestforms");
const contactForm = require("../models/contactform");

router.post("/requestforms", async (req, res) => {
    try {
        const newRequestForm = new requestForm(req.body);

        await newRequestForm.save();

        res.status(201).json({
            message: "Request form submitted successfully"
        });

    } catch (err) {
        console.log(err);

        if (err.name === "ValidationError") {
            return res.status(400).json({
                message: `${req.body.email} is not a valid email address`
            });
        }

        res.status(500).json({
            message: "There was an error submitting the request form"
        });
    }

});

router.post("/contactform", async (req, res) => {
   try {
        const newContactForm = new contactForm(req.body);

        await newContactForm.save();

        res.status(201).json({
            message: "Contact form submitted successfully"
        });

    } catch (err) {
        console.log(err);

        if (err.name === "ValidationError") {
            return res.status(400).json({
                message: `${req.body.email} is not a valid email address`
            });
        }

        res.status(500).json({
            message: "There was an error submitting the contact form"
        });
    }
});

module.exports = router;
