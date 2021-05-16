import express, { Request, Response } from "express";
import axios, { AxiosResponse } from "axios";
import {
  EXT_API_BASE_URL,
  EXT_API_RANDOM_ENDPOINT,
  EXT_API_SEARCH_ENDPOINT,
} from "../config";
import mapDrinks from "../utils/mapDrinks";

const router = express.Router();

router.get("/api/cocktails", async (req: Request, res: Response) => {
  let result: AxiosResponse<any>;
  try {
    // query search param has the search term
    if (req.query.search) {
      // searching for a cocktail if query param is specified
      const searchTerm = req.query.search as string;
      const url = EXT_API_BASE_URL + EXT_API_SEARCH_ENDPOINT + searchTerm;
      console.log(`External request sent to ${url}`);
      // send ext req
      result = await axios.get(url);
    } else {
      // if req body is empty, get random cocktail
      const url = EXT_API_BASE_URL + EXT_API_RANDOM_ENDPOINT;
      console.log(`External request sent to ${url}`);
      // send ext req
      result = await axios.get(url);
    }
    console.log("External data recieved on backend");
    // send API success response with transformed data
    res.send(mapDrinks(result.data));
  } catch (err) {
    console.log(err);
    // send failure status
    res.status(500).send("Server error: Could not reach external API");
  }
});

export { router as getCocktailRouter };
