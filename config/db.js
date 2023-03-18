import mongoose from 'mongoose';

const connectDB = async() =>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connected to mongo DB ${conn.connection.host}`);
    } catch (error) {
        console.log(`Errors in Mongo DB ${error}`);
    }
}

export default connectDB;