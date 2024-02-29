const express = require("express"),
http = require("http");

const hostname = "localhost";
const port = 3000;

const app = express();

//Hoạt động sau khi có 1 req từ POSTMAN hay server
app.use((req, res, next) => {
  console.log(req.headers);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<html><body><h1>This is an Express Server</h1></body></html>");
});

const server = http.createServer(app);

//Hoạt động sau khi npm start
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

//Chưa xài thử Morgan