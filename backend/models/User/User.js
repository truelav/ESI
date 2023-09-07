import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    passwod: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    phone: String,
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
