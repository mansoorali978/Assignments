const movies = require("./Movies");
const fs = require("fs");
const http = require("http");
const cors = require("cors");

const apiService = http.createServer((req, resp) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
    "Access-Control-Max-Age": 2592000, // 30 days
    /** add other headers as per requirement */
  };
  fs.readFile("Movies.json", "utf8", (err, data) => {
    if (req.url == "/movies") {
      resp.writeHead(200, headers);
      //   const obj = JSON.parse(data);
      //   console.log(obj);

      resp.end(data);
    } else {
      resp.end("404 error");
    }
  });
});
apiService.listen(8000);
