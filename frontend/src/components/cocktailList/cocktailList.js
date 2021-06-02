import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Typography, CircularProgress } from "@material-ui/core/";
import { useActions } from "../../hooks/useActions";
import { CocktailListItem } from "../cocktailListItem/CocktailListItem";
import "./cocktailList.css";

export const CocktailList = () => {
  const { data, error, loading } = useSelector((state) => state.cocktail);
  const { getRandomCocktail } = useActions();

  // Initially get a random cocktail
  useEffect(() => {
    getRandomCocktail();
  }, []);

  const List = () => {
    // If data is empty, no match was found
    return data ? (
      <>
        {data.map((cocktail) => (
          <CocktailListItem key={cocktail.id} data={cocktail} />
        ))}
      </>
    ) : (
      <Typography variant="h5">No results</Typography>
    );
  };

  return (
    <div className="cocktail-list list">
      {error && <Typography variant="h4">{error}</Typography>}
      {loading && (
        <div className="loading">
          <CircularProgress className="progress" />
          <Typography variant="h4" gutterBottom>
            Loading...
          </Typography>
        </div>
      )}
      {!error && !loading && <List />}
    </div>
  );
};
