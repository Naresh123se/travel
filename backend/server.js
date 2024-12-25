import connectDB from "./config/db.js";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

// Load environment variables from .env file
dotenv.config();

// Initializing the app
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Connect to the database
connectDB();

// Define a port from environment variables or use default
const PORT = process.env.PORT || 5000;

// Basic route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the API!11" }); // Ensure this is a JSON object
});

// Sample API route
app.get("/api", (req, res) => {
  res.json({ message: "Welcome 1" }); // Ensure this is a JSON object
});

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
