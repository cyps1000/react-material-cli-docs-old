/**
 * Imports Material UI components
 */
import { Box, Tooltip, IconButton } from "@material-ui/core/";

/**
 * Imports Material UI icons
 */
import Brightness7OutlinedIcon from "@material-ui/icons/Brightness7Outlined";
import Brightness4OutlinedIcon from "@material-ui/icons/Brightness4Outlined";

/**
 * Imports hooks
 */
import { useTheme } from "../../hooks";

/**
 * Imports the component styles
 */
import { useStyles } from "./ToggleTheme.styles";

/**
 * Displays the component
 */
export const ToggleTheme: React.FC = () => {
  /**
   * Gets the component styles
   */
  const classes = useStyles();

  /**
   * Inits the theme hook
   */
  const { activeTheme, changeTheme } = useTheme();

  /**
   * Handles toggling the light / dark theme
   */
  const toggleTheme = () => {
    changeTheme(activeTheme === "dark" ? "light" : "dark");
  };

  return (
    <Box className={classes.ToggleTheme}>
      <Tooltip
        title="Toggle light/dark theme"
        aria-label="theme"
        placement="bottom"
      >
        <IconButton aria-label="theme" color="inherit" onClick={toggleTheme}>
          {activeTheme === "light" ? (
            <Brightness4OutlinedIcon />
          ) : (
            <Brightness7OutlinedIcon />
          )}
        </IconButton>
      </Tooltip>
    </Box>
  );
};
