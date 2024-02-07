import mongoose from "mongoose";

export const commentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
});

export default mongoose.models["comments"] ||
  mongoose.model("comments", commentSchema);
