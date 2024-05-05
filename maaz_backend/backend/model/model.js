import mongoose from "mongoose";

const assistant_schema = new mongoose.Schema({
    name: {
        type: String
    },
    mobile: {
        type: Number
    },
    email: {
        type: String
 
    },
    salary: {
        type: Number

    },
    city: {
        type: String

    },
    country: {
        type: String
    },
    department: {
        type: String
    },
    role: {
        type: String
    }
});

const Assistant = mongoose.model("Assistant", assistant_schema);

export default Assistant;
