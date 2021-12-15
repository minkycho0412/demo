const express = require("express");

const app = express();
const PORT = 4000;

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => res.render("home"));
app.get("/about", (req, res) => res.render("about"));

const handleListening = () => console.log(`Server listening on http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);