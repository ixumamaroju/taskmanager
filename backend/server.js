const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("Backend Running");
});

// login API
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM users WHERE email=? AND password=?";
  db.query(sql, [email, password], (err, result) => {
    if (err) return res.send(err);

    if (result.length === 0)
      return res.status(401).send("Invalid credentials");

    res.json(result[0]);
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
