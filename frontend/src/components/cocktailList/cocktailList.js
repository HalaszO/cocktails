import { useSelector } from "react-redux";

export const CocktailList = () => {
  const { data, error, loading } = useSelector((state) => state.cocktail);
  return <div className="cocktail-list">Hero Area</div>;
};
