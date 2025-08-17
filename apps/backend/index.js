const express = require("express");
const path = require("path");
const app = express();
const PORT = 3001;

// Serve frames statically
app.use("/frames", express.static(path.join(__dirname, "frames")));

app.get("/", (req, res) => res.send("Hello from backend!"));

app.listen(PORT, () => console.log(`🚀 Server ready on port ${PORT}`));