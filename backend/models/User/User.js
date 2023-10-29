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
    isActive: {
      type: Boolean,
      default: true,
    },
    // roles: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Role",
    //     default: "USER",
    //   },
    // ],
    role: {
      type: String,
      required: true,
    },
    phone: String,
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
