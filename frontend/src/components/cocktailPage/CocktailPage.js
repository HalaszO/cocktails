import { AppTitle } from "../appTitle/AppTitle";
import { HeroArea } from "../heroArea/HeroArea";
import { SideBar } from "./../sideBar/SideBar";
import "./cocktailPage.css";

export const CocktailPage = () => {
  return (
    <div className="page cocktail-page">
      <AppTitle />
      <SideBar />
      <HeroArea />
    </div>
  );
};
