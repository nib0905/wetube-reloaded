import "./db";
import "./models/Video";
import express from "express";
//node_modules에서 "express"를 찾아준다.
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const PORT = 4000;
console.log(process.cwd());
const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({ extended: true }));
//express가 form을 이해하게 만드는 middleware 그렇기 때문에 router 보다 앞ㅇ ㅔ써줘야한다.
app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

const handleListening = () =>
  console.log(`✅ Server Listening on port http//localhost:${PORT}`);

app.listen(PORT, handleListening);
