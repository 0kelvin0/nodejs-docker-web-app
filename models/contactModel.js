import mongoose from "mongoose";

const contactSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please provide name"],
        },
        email: {
            type: String,
            required: [true, "Please provide email"],
        },
        phone: {
            type: String,
            required: [false],
        }
    }, 
    {
        timestamps: true,
    }
);

const Contact = mongoose.model("Contact", contactSchema);
export default Contact;