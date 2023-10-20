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
    password: {
      type: String,
      required: true,
    },
    isActive:{
      type: Boolean,
      default: false
    }, 
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role",
      },
    ],
    role: String,
    phone: String,
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
