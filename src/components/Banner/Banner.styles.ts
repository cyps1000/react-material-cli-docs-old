/**
 *  Material UI Imports
 * @see https://material-ui.com/styles/basics/
 */
import { makeStyles, Theme } from "@material-ui/core/styles";

/**
 * Styles the component
 */
const useStyles = makeStyles((theme: Theme) => ({
  Banner: {
    marginTop: "0rem",
    padding: "3rem 0",
    backgroundColor: "#764abc"
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    color: theme.palette.common.white,
    textAlign: "center"
  },
  title: {
    fontSize: "3.75rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "3.0rem"
    }
  },
  button: {
    marginTop: "2.8rem",
    color: theme.palette.common.white,
    borderColor: theme.palette.common.white,
    "&:hover": {
      borderColor: theme.palette.common.white
    }
  }
}));

export { useStyles };
