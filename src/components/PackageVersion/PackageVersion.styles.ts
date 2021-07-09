/**
 *  Material UI Imports
 * @see https://material-ui.com/styles/basics/
 */
import { makeStyles, Theme } from "@material-ui/core/styles";

/**
 * Styles the component
 */
const useStyles = makeStyles((theme: Theme) => ({
  PackageVersion: {},
  button: {
    fontSize: "0.97rem",
    fontWeight: 600,
    letterSpacing: "0.06rem",
    textTransform: "initial"
  }
}));

export { useStyles };
