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
    padding: "1rem"
  }
}));

export { useStyles };
