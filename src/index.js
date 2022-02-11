require("dotenv").config();

const express = require("express");
const server = express();
server.use(express.json());

const fakeUsers = [
  { username: "john123", password: "hunter2" },
  { username: "ray237", password: "password2341" },
];

const PORT = process.env.PORT || 9002;

server.get("/api/users", (req, res) => {
  res.status(200).json(fakeUsers);
});

server.post("/api/register", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(500).json({
      message: "something went wrong",
    });
  } else {
    res.status(201).json(req.body);
  }
});

server.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400).json({
      message: "you've entered the wrong login information",
    });
  } else {
    res.status(200).json({ message: "Welcome" });
  }
});

server.listen(PORT, () => {
  console.log(`\n*** Server listening on ${PORT} ***\n`);
});
