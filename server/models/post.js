import mongoose from "mongoose";
import moment from "moment";

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    index: true,
  },
  contents: {
    type: String,
    required: true,
  },
  views: {
    type: Number,
    default: -2,
  },
  fileUrl: {
    type: String,
    default:
      "https://blogpfthumb-phinf.pstatic.net/MjAyMDAzMDlfMjc5/MDAxNTgzNzMyOTU3Mjcz.T4xDyWcK4pGh_F_Io-zCwa6Serbq4skNyGk-T1HXRWMg.WU0pXwWM7WK1XtHMpBhlGxmyFPGwf0k8A1UF_5rr3sIg.PNG.wolfy1214/2233.png?type=w161",
  },
  date: {
    type: String,
    default: moment().format("YYYY-MM-DD hh:mm:ss"),
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category",
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "comment",
    },
  ],
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

const Post = mongoose.model("post", PostSchema);

export default Post;
