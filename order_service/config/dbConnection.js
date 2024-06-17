import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()
const port = process.env.PORT_NUMBER;

export const dbConnection = async(app)=>{
    try {
        const connection = await mongoose.connect(process.env.MONGO_URL)
        app.listen(port,()=>{
            console.clear()
            console.log(`MongoDB database connection successfully established and host is ${connection.connection.host}`)
            console.log(`Order service listening on port ${port}`);
        });
    } catch (error) {
        console.log("MongoDB database connection failed: " + error)
    }
}