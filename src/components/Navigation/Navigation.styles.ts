/**
 *  Material UI Imports
 * @see https://material-ui.com/styles/basics/
 */
import { makeStyles, Theme } from "@material-ui/core/styles";

/**
 * Styles the component
 */
const useStyles = makeStyles((theme: Theme) => ({
  Navigation: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.navbar
  },
  menuButton: {},
  menuItems: {
    marginLeft: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    letterSpacing: "0.06rem",
    paddingLeft: "0.4rem"
  }
}));

export { useStyles };
