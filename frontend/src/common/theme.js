import { createMuiTheme } from "@material-ui/core/styles";

export const lightTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#f4511e",
    },
    secondary: {
      main: "#aeea00",
    },
  },
});

export const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#f4511e",
    },
    secondary: {
      main: "#aeea00",
    },
  },
});
