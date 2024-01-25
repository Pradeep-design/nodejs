import mongoose from "mongoose";

const userShema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  age: {
    type: Number,
  },

});

const aboutShema = mongoose.Schema({
  user:{
    type:String,
  },
  text:{
    type:String,
  }



});

const userModel = mongoose.model("users", userShema);
const aboutModel = mongoose.model("abouts",aboutShema)
export default userModel;
// module.exports ={
//   userModel,
//   aboutModel,
// }