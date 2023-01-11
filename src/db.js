import mongoose from "mongoose";
mongoose.set("strictQuery", true);
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
//wetube는 db이름

const db = mongoose.connection;

const handleOpen = () => console.log("✅ Connected to DB");
const handleError = (error) => console.log("❌ DB Error", error);

db.on("error", handleError);
//error 이벤트
//.on은 여러번 발생 once는 한 번 발생
db.once("open", handleOpen);
