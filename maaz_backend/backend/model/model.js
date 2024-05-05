import mongoose from "mongoose"

const assistant_schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: false
    },
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    }
});

const Assistant = mongoose.model("Assistant", assistant_schema);

export default Assistant
