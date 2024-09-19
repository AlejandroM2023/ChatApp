import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_URI, ()=> console.log('databse connected'));

export default mongoose.connection;