const express = require("express");
const app = express();
const routes = require("./routes");
const Auth = require("./middleware/auth");

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "*");
  next();
});

app.use((req, res, next) => {
  Auth(req.headers, (response) => {
    response.status == "success" ? next() : res.send(response);
  });
});

routes.forEach((route) => {
  const { method, path, controller } = route;
  app[method](path, controller);
});

const { APP_NAME, APP_HOST, APP_PORT } = process.env;
app.listen(APP_PORT, () => {
  console.clear();
  console.log(`\n\x1b[36m${APP_NAME} is running at:`);
  console.log(`\x1b[36m========> ${APP_HOST}:${APP_PORT} <========`);
  console.log("\x1b[0m");
});