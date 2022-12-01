const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config({ path: ".env" });
const { errorHandler } = require("./backend/middleware/errorMiddleware");
const connectDB = require("./backend/config/db");
const PORT = process.env.PORT || 8500;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./backend/routes/goalRoute"));
app.use("/api/users", require("./backend/routes/userRoute"));

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
