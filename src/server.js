//server.js는 express와 server 관련 부분!
import express from "express";
import morgan from "morgan";
import session from "express-session";
import MongoStore from "connect-mongo";
import { localsMiddleware } from "./middlewares";
import rootRouter from "./routers/rootRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

//console.log(process.cwd());
const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({ extended: true }));
//express가 form을 이해하게 만드는 middleware 그렇기 때문에 router 보다 앞ㅇ ㅔ써줘야한다.

//session 미들웨어 사이트에 들어오는 모든 걸 기얼하게 됨.
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    //session이 수정될때만 백엔드에 쿠키를 주게끔 하기 위함.
    store: MongoStore.create({ mongoUrl: process.env.DB_URL }),
    //session mongodb로 저장
  })
);

app.use((req, res, next) => {
  //console.log(res);
  //res에서 locals object 찾기 가능
  req.sessionStore.all((error, session) => {
    //console.log("in server.js", session);
    next();
  });
});

//localmiddelware : session 미들웨어 다음에 오기에 실행가능한 것!
//그래야지 localsMiddleware가 session object에 접근
app.use(localsMiddleware);

//router
app.use("/", rootRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

export default app;
