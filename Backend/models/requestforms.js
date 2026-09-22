const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const requestFormSchema = new Schema({
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
    address: {
        type: String,
        required: false
    },
    zipcode: {
        type: String,
        required: true
    },
    project: {
        type: String,
        required: true
    }
}, { timestamps: true });

const RequestForm = mongoose.model("RequestForm", requestFormSchema);

module.exports = RequestForm;
