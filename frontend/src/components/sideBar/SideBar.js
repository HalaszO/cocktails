import { Input, InputAdornment, IconButton, Button } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import "./sideBar.css";

export const SideBar = () => {
  return (
    <div className="side-bar">
      <form className="form search-form">
        <Input
          id="search-input"
          label="Search"
          placeholder="Search for cocktails..."
          endAdornment={
            <InputAdornment position="end">
              <IconButton>
                <Search />
              </IconButton>
            </InputAdornment>
          }
        />
      </form>
      <Button className="random-btn btn" variant="contained" color="primary">
        Random cocktail
      </Button>
    </div>
  );
};
