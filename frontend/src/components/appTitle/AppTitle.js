import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { ThemeTogglerBtn } from "../themeToggle/ThemeToggleBtn";

const CustomToolbar = withStyles({
  root: {
    justifyContent: "center",
  },
})(Toolbar);

export const AppTitle = () => {
  return (
    <AppBar position="sticky">
      <CustomToolbar className="toolbar">
        <Typography className="title-text" variant="h3">
          Cocktail app
        </Typography>
        <ThemeTogglerBtn />
      </CustomToolbar>
    </AppBar>
  );
};
