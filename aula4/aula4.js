const express = require("express");
const connectDB = require("./config/config");
const app = express();
connectDB();
app.use(express.json());
app.listen(3000, () => console.log("Server running on port 3000"));