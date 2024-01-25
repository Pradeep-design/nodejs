import mongoose from "mongoose";

const connectToMongo = async () => {
  try {
    const res = await mongoose.connect("mongodb://127.0.0.1:27017/crud-mern");
    if (res) {
      console.log("connected successfully");
    }
  } catch (error) {
    console.log(error);
  }
  
};

export default connectToMongo;
