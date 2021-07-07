/**
 *  Material UI Imports
 * @see https://material-ui.com/styles/basics/
 */
import { makeStyles, Theme } from "@material-ui/core/styles";

/**
 * Styles the component
 */
const useStyles = makeStyles((theme: Theme) => ({
  ActiveLanguage: {},
  languageSelector: {
    "& svg:first-child": {
      marginRight: "0.4rem"
    }
  }
}));

export { useStyles };
