import app from "./app";
import config from "./config/index";

const { PORT } = config;

app.listen(PORT, () => {
  console.log(
    `Server started on Port ${PORT}. server.js에서 실행되고 있다네요!?`
  );
});
