/**
 *  Material UI Imports
 * @see https://material-ui.com/styles/basics/
 */
import { makeStyles, Theme } from "@material-ui/core/styles";

/**
 * Styles the component
 */
const useStyles = makeStyles((theme: Theme) => ({
  Features: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: "2rem 0",
    color: theme.palette.secondary.light
  },
  title: {
    fontSize: "2.7rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.0rem"
    }
  },
  featuresPreview: {
    textAlign: "center",
    "& p": {
      fontSize: "1.5rem",
      [theme.breakpoints.down("sm")]: {
        fontSize: "1.2rem"
      }
    }
  }
}));

export { useStyles };
