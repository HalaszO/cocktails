import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { useSelector } from "react-redux";
import { CocktailPage } from "../components/cocktailPage/CocktailPage";
import { darkTheme, lightTheme } from "./../common/theme";

const App = () => {
  const { theme } = useSelector((state) => state.theme);
  const selectedTheme = theme === "dark" ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={selectedTheme}>
      <CssBaseline />
      <Router>
        <Switch>
          <Route path="/cocktail" exact>
            <CocktailPage />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
