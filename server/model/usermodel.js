import { Schema, model } from "mongoose";

const userschema = new Schema({
  Name: {
    type: String,
    required: true,
  },
  CollegeName: {
    type: String,
    required: true,
  },
  PhoneNumber: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  City: {
    type: String,
    required: true,
  },
  State: {
    type: String,
    required: true,
  },
  Domain: {
    type: String,
    required: true,
  },
  Sports: {
    type: String,
    required: true,
  },
});

const User = model("User", userschema);

export default User;
