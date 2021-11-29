import express from "express";

const app = express();
const PORT = 4000;

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => res.render("home"));

const handleListening = () => console.log(`Server listening on http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);