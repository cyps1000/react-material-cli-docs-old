/**
 *  Material UI Imports
 * @see https://material-ui.com/styles/basics/
 */
import { makeStyles, Theme, alpha } from "@material-ui/core/styles";

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
  githubButton: {
    marginLeft: "0.4rem",
    color: theme.palette.secondary.main,
    "&:hover": {
      color: alpha(theme.palette.secondary.main, 0.7)
    }
  }
}));

export { useStyles };
