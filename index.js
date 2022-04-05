const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = mongoose.connection;
const routes = require("./routes");
const Auth = require("./Utils/auth");
const config = require("./config");

mongoose.connect(`${config.db.host}/${config.db.database}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "*");
  next();
});

// authentication
app.use((req, res, next) => {
  Auth(req.headers, (response) => {
    if (response.status == "success") next();
    else res.send(response);
  });
});

routes.forEach((route) => {
  switch (route.method) {
    case "get":
      app.get(route.path, route.controller);
      break;
    case "post":
      app.post(route.path, route.controller);
      break;
    case "put":
      app.put(route.path, route.controller);
      break;
    case "patch":
      app.patch(route.path, route.controller);
      break;
    default:
      app.get(route.path, route.controller);
      break;
  }
});

app.listen(config.app.port, () => {
  console.log(`\n\x1b[36m${config.app.name} is running`);
  console.log(`\x1b[36mLocalhost  : localhost:${config.app.port}`);
  console.log(`\x1b[36mOn Network : ${config.app.host}:${config.app.port}`);
  console.log("\x1b[0m");
});
