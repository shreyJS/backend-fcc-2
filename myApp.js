require("dotenv").config();
let express = require("express");
let app = express();
console.log("Hello World");

// get() is used to define GET routes
app.get("/", (req, res) => {
  let absolutePath = __dirname + "/views/index.html";
  res.sendFile(absolutePath);
});


// use() method is used to mount middlewares like static()
app.use("/public", express.static(__dirname + "/public"));


app.get('/json', (req, res) => {
    let message = 'Hello json'
    if (process.env.MESSAGE_STYLE === 'uppercase') {
      return res.json({"message": message.toUpperCase()})
    }
    return res.status(200).json({"message": message})
  })


module.exports = app;
