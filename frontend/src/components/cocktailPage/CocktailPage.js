import { AppTitle } from "../appTitle/AppTitle";
import { CocktailList } from "../cocktailList/cocktailList";
import { SideBar } from "./../sideBar/SideBar";
import Container from "@material-ui/core/Container";
import "./cocktailPage.css";

export const CocktailPage = () => {
  return (
    <div>
      <AppTitle />
      <Container maxWidth="lg">
        <div className="page cocktail-page">
          <SideBar />
          <CocktailList />
        </div>
      </Container>
    </div>
  );
};
