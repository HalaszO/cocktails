import { useSelector } from "react-redux";
import { IconButton } from "@material-ui/core";
import { Brightness5, Brightness2 } from "@material-ui/icons";
import { useActions } from "../../hooks/useActions";

const styles = {
  "theme-btn": {
    position: "absolute",
    marginLeft: "92%",
  },
};

export const ThemeTogglerBtn = () => {
  const { theme } = useSelector((state) => state.theme);
  const { toggleDarkTheme, toggleLightTheme } = useActions();

  const handleOnClick = () => {
    if (theme === "dark") {
      toggleLightTheme();
    } else {
      toggleDarkTheme();
    }
  };

  // if theme is dark, the icon should be the sun, if light then the moon
  const icon = theme === "dark" ? <Brightness5 /> : <Brightness2 />;

  return (
    <div className="theme-btn" style={styles["theme-btn"]}>
      <IconButton onClick={handleOnClick} title="Toggle theme">
        {icon}
      </IconButton>
    </div>
  );
};
