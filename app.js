const express = require("express");
const path = require("path");
const PORT = 3000;

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public/pages/about.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "public/pages/contact.html"));
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "public/pages/404.html"));
});

app.listen(PORT, (err) => {
  if (err) {
    console.log("Error starting server:", err);
  } else {
    console.log(`Server running on http://localhost:${PORT}`);
  }
});
