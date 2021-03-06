import express from "express";
import mongoose from "mongoose";
import config from "./config";
import hpp from "hpp";
import helmet from "helmet";
import cors from "cors";
import path from 'path';  //절대경로를 상대경로처럼 쉽게 쓸 수 있게 해주는 라이브러리 

// Routes
import postsRoutes from "./routes/api/post";
import userRoutes from "./routes/api/user";
import authRoutes from "./routes/api/auth";
import searchRoutes from "./routes/api/search";

import morgan from "morgan";

const app = express();
const { MONGO_URI } = config;

const prod = process.env.NODE_ENV === "production"

app.use(hpp()); // 서버의 보안을 담당해주는 라이브러리
app.use(helmet()); //서버의 보안을 담당해주는 라이브러리
app.use(cors({ origin: true, credentials: true })); //싱글페이지 애플리케이션에에서 쓰인다는데 알아보기
app.use(morgan("dev")); //개발환경을 설정해서 로그를 확인할 수 있도록 하는것
app.use(express.json()); //익스프레스에서 제이슨 형태를 해석해주세요~ 라고 하는 것인듯// 라우터는 분기점이라는 뜻인데 책갈피같은 표시를하는거임

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
     useFindAndModify: false,
  })
  .then(() => console.log("MongoDB connecting에도 이상 없음! 잘 됩니다."))
  .catch((e) => console.log(e));

// Use routes

app.use("/api/post", postsRoutes);
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/search", searchRoutes);

if (prod){
  app.use(express.static(path.join(__dirname, "../client/build")))
  app.get("*", (req, res)=> {
    res.sendFile(path.resolve(__dirname, "../client/build","index.html"))
  })
}

export default app;