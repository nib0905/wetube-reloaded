//mongoose에게 우리 데이터가 어떻게 생겼는지 알려줘야한다.

import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: String,
  description: String,
  createAt: Date,
  hashtags: [{ type: String }],
  meta: {
    views: Number,
    rating: Number,
  },
});

const Video = mongoose.model("Video", videoSchema);
//"Video"는 모델의 namd
//const Video 변수명과 매개변수 안의 "Video"는 다른 것

export default Video;