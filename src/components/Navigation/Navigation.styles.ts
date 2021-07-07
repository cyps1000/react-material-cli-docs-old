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
    backgroundColor: theme.palette.primary.dark
  },
  menuButton: {
    marginRight: "1rem"
  },
  title: {
    flexGrow: 1,
    letterSpacing: "0.06rem"
  },
  languageSelector: {
    "& svg:first-child": {
      marginRight: "0.4rem"
    }
  }
}));

export { useStyles };
