import express from "express";
import { json } from "body-parser";
import "express-async-errors";
import { getCocktailRouter } from "./routes/getCocktail";

const app = express();

// Parsing req as json
app.use(json());

app.use(getCocktailRouter);

// Invalid route
app.all("*", async (req, res) => {
  throw new Error("Route not found");
});

export default app;
