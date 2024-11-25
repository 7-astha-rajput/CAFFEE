import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3, "First name must contain atleast 3 characters!"],
        maxLength: [30, "First name cannot axceed 30 characters!"],
    },
    lastName: {
        type: String,
        minLength: [3, "First name must contain atleast 3 characters!"],
        maxLength: [30, "First name cannot axceed 30 characters!"],
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Provide a valid email!"],
    },
    phone: {
        type: String,
        minLength: [10, "Phone number must contain 10 digits"],
        maxLength: [10, "Phone number must contain 10 digits"],
    },
    date: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    persons: {
        type: Number,
        required: true,
    },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);
