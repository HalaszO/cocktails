import express from "express";
import { json } from "body-parser";
import cors from "cors";
import "express-async-errors";
import { getCocktailRouter } from "./routes/getCocktail";

const app = express();

// Parsing req as json
app.use(json());
// Enabling CORS for the frontend
app.use(
  cors({
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
);

// Attaching /cocktail route
app.use(getCocktailRouter);

// Invalid route
app.all("*", async (req, res) => {
  res.status(404).send("Route not found");
});

export default app;
