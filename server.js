const fs = require("fs");
const path = require("path");
const express = require("express");
const morgan = require("morgan");
const rfs = require("rotating-file-stream");
const favicon = require("serve-favicon");

const app = express();

const logDirectory = path.join(__dirname, "log");
const distDirectory = path.join(__dirname, "dist");

fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

const accessLogStream = rfs("access.log", {
  interval: "1d", // rotate daily
  path: logDirectory
});

app.use(favicon(path.join(distDirectory, "favicon.ico")));
app.use(morgan("combined", { stream: accessLogStream }));

app.use(express.static("dist"));
app.use("*", function(req, res, next) {
  if (/\/[^.]*$/.test(req.url)) {
    res.sendFile(path.join(distDirectory, "index.html"));
  } else {
    next();
  }
});

const port = process.env.PORT || 3220;

app.listen(port);

console.log(`Listening on port ${port} 🎉`);
