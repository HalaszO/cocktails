import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from "@material-ui/core/Container";
import React from "react";
import { CocktailPage } from "../components/cocktailPage/CocktailPage";

const App = () => {
  return (
    <Router>
      <Container maxWidth="lg">
        <Switch>
          <Route path="/cocktail" exact>
            <CocktailPage />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
