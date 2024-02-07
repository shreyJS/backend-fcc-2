require("dotenv").config();
let express = require("express");
let app = express();
console.log("Hello World");

// get() is used to define GET routes
app.get("/", (req, res) => {
  let absolutePath = __dirname + "/views/index.html";
  res.sendFile(absolutePath);
});

app.get("/json", (req, res) => {
  if (process.env.MESSAGE_STYLE == "uppercase") {
    res.json({ message: "Hello json".toUpperCase() });
} else {
    res.json({ message: "Hello json" });
  }
});

// use() method is used to mount middlewares like static()
app.use("/public", express.static(__dirname + "/public"));

module.exports = app;
