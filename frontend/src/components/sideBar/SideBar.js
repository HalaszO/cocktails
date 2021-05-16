import {
  Input,
  InputAdornment,
  IconButton,
  Button,
  Typography,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { useState } from "react";
import { useActions } from "../../hooks/useActions";
import "./sideBar.css";

export const SideBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { searchCocktails, getRandomCocktail } = useActions();

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const submitSearch = (event) => {
    event.preventDefault();
    searchCocktails(searchTerm);
  };

  const handleRandomBtnOnclick = () => {
    getRandomCocktail();
  };

  return (
    <div className="side-bar">
      <form className="form search-form" onSubmit={submitSearch}>
        <Input
          id="search-input"
          value={searchTerm}
          onChange={handleChange}
          label="Search"
          placeholder="Search for cocktails..."
          endAdornment={
            <InputAdornment position="end">
              <IconButton type="submit">
                <Search />
              </IconButton>
            </InputAdornment>
          }
        />
      </form>
      <Typography variant="h5">OR</Typography>
      <Button
        className="random-btn"
        variant="contained"
        color="primary"
        onClick={handleRandomBtnOnclick}
      >
        Get a random cocktail
      </Button>
    </div>
  );
};
