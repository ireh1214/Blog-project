import mongoose from "mongoose";

// Create Schema
const CategorySchema = new mongoose.Schema({
  categoryName: {
    type: String,
    default: "-",
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post",
    },
  ],
});

const Category = mongoose.model("category", CategorySchema);

export default Category;
