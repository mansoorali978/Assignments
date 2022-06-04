const express = require("express");
const app = express();
app.use(express.json());
const getData = [
  {
    id: "1",
    name: "Mansoor",
    date_of_birth: "26/8/1997",
  },
];

app.listen(4000, () => {
  console.log("first");
});

app.get("/getData", (req, resp) => {
  resp.send(getData);
});

app.post("/postData", (req, resp) => {
  console.log(req.body);
  resp.send("Post data request");
});
