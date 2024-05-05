import mongoose from "mongoose";

const DB = async () => {
    try {
        await mongoose.connect('mongodb+srv://maazsaboowala07:vFrORAqNa71lOqAC@maazbackendhirademy.qz9m5op.mongodb.net/?retryWrites=true&w=majority&appName=MaazBackendHirademy', { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('MongoDB connected');
    } catch (err) {
        console.error('MongoDB connection error:', err);
    }
}

export default DB;
