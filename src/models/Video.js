//mongoose에게 우리 데이터가 어떻게 생겼는지 알려줘야한다.
import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  createAt: { type: Date, required: true, default: Date.now },
  hashtags: [{ type: String }],
  meta: {
    views: { type: Number, default: 0, required: true },
    rating: { type: Number, default: 0, required: true },
  },
});

const Video = mongoose.model("Video", videoSchema);
//"Video"는 모델의 name
//const Video 변수명과 매개변수 안의 "Video"는 다른 것

export default Video;
