const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactFormSchema = new Schema({
    fname: {
        type: String,
        required: true,
        trim: true,
        maxlength: 20
    },
    lname: {
        type: String,
        required: true,
        trim: true,
        maxlength: 20
    },
    
    phone: {
        type: String,
        required: false,
        trim: true,
        maxlength: 20
    },
    email: {
        type: String,
        required: true,
        match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email address"],
        trim: true,
        maxlength: 254
    },
    zipcode: {
        type: String,
        required: true,
        trim: true,
        maxlength: 15
    },
    message: {
        type: String,
        required: true,
        trim: true,
        maxlength: 500
    }
}, { timestamps: true });

const ContactForm = mongoose.model("ContactForm", contactFormSchema);

module.exports = ContactForm;


