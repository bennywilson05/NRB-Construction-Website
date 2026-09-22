const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactFormSchema = new Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    
    phone: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true,
        match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email address"]
    },
    zipcode: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
}, { timestamps: true });

const ContactForm = mongoose.model("ContactForm", contactFormSchema);

module.exports = ContactForm;


