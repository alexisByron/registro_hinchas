const express = require("express");
const morgan = require("morgan");

const app = express();
const port = 3000;

app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("<h1 style='color: green;'>Welcome to the Registro Hincha API</h1>");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
