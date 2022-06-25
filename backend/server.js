require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const expensesRoutes = require("./routes/expenses");

const app = express();

// Parses incoming requests to JSON
app.use(express.json());

// CORS
const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

// Expenses routes
app.use("/api/expenses", expensesRoutes);

// 404
app.use((req, res) => {
  res.status(404).json({ message: "Api route not found" });
});

// Connecting to MongoDB
mongoose
  .connect(process.env.MONGO_DB_URI)
  .then(() =>
    app.listen(process.env.APP_PORT, () =>
      console.log(
        "Connected to MongoDB & Listening on port: ",
        process.env.APP_PORT
      )
    )
  )
  .catch((error) => console.log(error));
