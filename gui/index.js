const express = require("express");
const app = express();
const path = require('path')

app.use("/css", express.static(path.join(__dirname, "css/")));
app.use("/js", express.static(path.join(__dirname, "js/")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./index.html"));
});

app.listen(3331, () => {
  console.clear();
  console.log(`\n\x1b[36mGUI is running at:`);
  console.log(`\x1b[36m========> localhost:3331 <========`);
  console.log("\x1b[0m");
});
