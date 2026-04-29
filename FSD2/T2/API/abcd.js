const express = require("express");

const app = express();

app.use(express.json()); // middleware

const PORT = 3000;

// Dummy database

let users = [
  { id: 1, name: "Priyen" },

  { id: 2, name: "ABC" },
];

let nextId = 3;

// GET all users

app.get("/users", (req, res) => {
  res.json(users);
});

// GET single user

app.get("/users/:id", (req, res) => {
  const user = users.find((u) => u.id == req.params.id);

  if (!user) return res.status(404).json({ message: "User not found" });

  res.json(user);
});

// CREATE user

app.post("/users", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Name is required" });
  }

  const newUser = { id: nextId++, name };

  users.push(newUser);

  res.status(201).json(newUser);
});

//patch USer

app.patch("/users/:id", (req, res) => {
  const user = users.find((u) => u.id == req.params.id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  // Partial update (only update fields sent in body)

  if (req.body.name !== undefined) {
    user.name = req.body.name;
  }

  res.json(user);
});

// UPDATE user

app.put("/users/:id", (req, res) => {
  const user = users.find((u) => u.id == req.params.id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  user.name = req.body.name || user.name;

  res.json(user);
});

// DELETE user

app.delete("/users/:id", (req, res) => {
  const index = users.findIndex((u) => u.id == req.params.id);

  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  const deletedUser = users.splice(index, 1);

  res.json({
    message: "User deleted",

    user: deletedUser[0],
  });
});

// Start server

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/users`);
});
