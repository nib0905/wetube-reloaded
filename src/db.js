import mongoose from "mongoose";
mongoose.set("strictQuery", true);
mongoose.connect("mongodb://127.0.0.1:27017/wetube", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
//wetube는 db이름

const db = mongoose.connection;

const handleOpen = () => console.log("✅ Connected to DB");
db.on("error", (error) => console.log("DB Error", error));
//error 이벤트
//.on은 여러번 발생 once는 한 번 발생
db.once("open", handleOpen);
