import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./error/error.js";
import reservationRouter from "./routes/reservationRoute.js";

const app = express();
dotenv.config({ path: "./config/config.env" });

const allowedOrigins = [process.env.FRONTEND_URL || "http://localhost:5173"];

// Configure CORS
app.use(
    cors({
        origin: (origin, callback) => {
            if (allowedOrigins.includes(origin) || !origin) {
                callback(null, true); // Allow request
            } else {
                callback(new Error("Not allowed by CORS")); // Block request
            }
        },
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        credentials: true, // Allow cookies or authentication headers
    })
);

// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
app.use("/api/v1/reservation", reservationRouter);

// Database connection
dbConnection();

// Error handling middleware
app.use(errorMiddleware);

export default app;
