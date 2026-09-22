const express = require("express");
const router = express.Router();

const requestForm = require("../models/requestforms");
const contactForm = require("../models/contactform");
const transporter = require("../utils/mailer");

router.post("/requestforms", async (req, res) => {
    try {
        const newRequestForm = new requestForm(req.body);

        await newRequestForm.save();

        try {
            await transporter.sendMail({
                from: process.env.SMTP_USER,
                to: process.env.COMPANY_EMAIL,
                replyTo: req.body.email,
                subject: "New Estimate Request",

                text: `
                    New Estimate Request

                    First Name: ${req.body.fname}
                    Last Name: ${req.body.lname}
                    Phone: ${req.body.phone || "Not provided"}
                    Email: ${req.body.email}
                    Address: ${req.body.address || "Not provided"}
                    Zip Code: ${req.body.zipcode}

                    Project:
                    ${req.body.project}
                    `
            });

        } catch (emailError) {
            console.error("Estimate notification email failed:", emailError);
        }

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

        try {
            await transporter.sendMail({
                from: process.env.SMTP_USER,
                to: process.env.COMPANY_EMAIL,
                replyTo: req.body.email,
                subject: "New Contact Form Submission",

            text: `
                New Contact Form Submission

                First Name: ${req.body.fname}
                Last Name: ${req.body.lname}
                Phone: ${req.body.phone || "Not provided"}
                Email: ${req.body.email}
                Zip Code: ${req.body.zipcode}

                Message:
                ${req.body.message}
                `
        });

        } catch (emailError) {
            console.error("Contact notification email failed:", emailError);
        }

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
