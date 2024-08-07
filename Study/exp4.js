const express = require("express");
const app = express();
const port = 7000;

app.use(express.json());

const validUsername = "user";
const validPassword = "password";

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username === validUsername && password === validPassword) {
    res.status(200).send(`Welcome ${username}!`);
  } else {
    res.status(401).send("Invalid credentials");
  }
});

app.get("/profile", (req, res) => {
  const profile = {
    username: "testUser",
    age: 25,
    email: "test@example.com",
  };
  res.status(200).json(profile);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
