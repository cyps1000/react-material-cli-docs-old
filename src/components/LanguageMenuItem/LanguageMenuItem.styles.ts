/**
 *  Material UI Imports
 * @see https://material-ui.com/styles/basics/
 */
import { makeStyles, Theme } from "@material-ui/core/styles";

/**
 * Styles the component
 */
const useStyles = makeStyles((theme: Theme) => ({
  LanguageMenuItem: {
    display: "flex",
    alignItems: "center",
    minWidth: 125,
    minHeight: 25,
    justifyContent: "space-between"
  },
  menuItem: {
    minHeight: 30,
    "& .MuiListItem-gutters": {
      paddingLeft: 8,
      paddingRight: 8
    }
  },
  item: {
    display: "flex",
    alignItems: "center",
    "& svg": {
      width: 25,
      height: 25
    }
  },
  abbreviation: {
    lineHeight: 1.1,
    marginLeft: 8,
    display: "flex",
    alignItems: "center",
    fontWeight: 500,
    fontSize: "0.9rem"
  }
}));

export { useStyles };
