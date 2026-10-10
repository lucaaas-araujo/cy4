const express = require("express");
const connectDB = require("./config/config");
const bookRoutes = require("./routes/bookRoutes");

const app = express();

connectDB();

app.use(express.json());

// Encaminha todas as requisições com prefixo /api para bookRoutes
app.use("/api", bookRoutes);

app.listen(3000, () => console.log("Server running on port 3000"));