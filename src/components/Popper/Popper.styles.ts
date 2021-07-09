/**
 *  Material UI Imports
 * @see https://material-ui.com/styles/basics/
 */
import { makeStyles, Theme } from "@material-ui/core/styles";

/**
 * Styles the component
 */
const useStyles = makeStyles((theme: Theme) => ({
  Popper: {
    background: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    fontSize: "0.8rem",
    fontWeight: 500,
    maxWidth: 400,
    borderRadius: 4,
    border: `1px solid ${theme.palette.secondary.main}`
  },
  popper: {
    zIndex: 2000,
    '&[x-placement*="right"]': {
      left: "10px !important"
    },
    '&[x-placement*="left"]': {
      left: "-10px !important"
    },
    '&[x-placement*="bottom"]': {
      top: "-20px !important",
      left: "-10px !important"
    },
    '&[x-placement="bottom-end"]': {
      top: "10px !important",
      left: "20px !important"
    }
  },
  childContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
    zIndex: 200
  }
}));

export { useStyles };
