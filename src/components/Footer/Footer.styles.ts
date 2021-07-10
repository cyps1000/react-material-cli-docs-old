/**
 *  Material UI Imports
 * @see https://material-ui.com/styles/basics/
 */
import { makeStyles, Theme } from "@material-ui/core/styles";

/**
 * Styles the component
 */
const useStyles = makeStyles((theme: Theme) => ({
  Footer: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.dark,
    top: "auto",
    bottom: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: "2.5rem",
    "& a": {
      textDecoration: "none",
      color: theme.palette.secondary.main,
      "&:hover": {
        textDecoration: "underline"
      }
    }
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",

    textAlign: "center"
  },
  copyrightText: {
    marginTop: "3rem"
  }
}));

export { useStyles };
