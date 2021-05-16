import { AppTitle } from "../appTitle/AppTitle";
import { CocktailList } from "../cocktailList/cocktailList";
import { SideBar } from "./../sideBar/SideBar";
import "./cocktailPage.css";

export const CocktailPage = () => {
  return (
    <div className="page cocktail-page">
      <AppTitle />
      <SideBar />
      <CocktailList />
    </div>
  );
};
