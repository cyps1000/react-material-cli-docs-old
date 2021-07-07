/**
 * Imports Material UI components
 */
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Link,
  Tooltip,
  IconButton
} from "@material-ui/core/";

/**
 * Imports Material UI icons
 */
import MenuIcon from "@material-ui/icons/Menu";
import GitHubIcon from "@material-ui/icons/GitHub";
import Brightness7OutlinedIcon from "@material-ui/icons/Brightness7Outlined";
import Brightness4OutlinedIcon from "@material-ui/icons/Brightness4Outlined";

/**
 * Imports hooks
 */
import { useTheme } from "../../hooks";

/**
 * Imports the component styles
 */
import { useStyles } from "./Navigation.styles";

/**
 * Defines the props interface
 */
export interface NavigationProps {
  appName: string;
}

/**
 * Displays the component
 */
export const Navigation: React.FC<NavigationProps> = (props) => {
  const { appName } = props;
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
    <div className={classes.Navigation}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {appName}
          </Typography>
          <Tooltip
            title="Toggle light/dark theme"
            aria-label="theme"
            placement="bottom"
          >
            <IconButton
              aria-label="theme"
              color="inherit"
              onClick={toggleTheme}
            >
              {activeTheme === "light" ? (
                <Brightness4OutlinedIcon />
              ) : (
                <Brightness7OutlinedIcon />
              )}
            </IconButton>
          </Tooltip>
          <Tooltip
            title="GitHub Repository"
            aria-label="github"
            placement="bottom"
          >
            <Link href="https://github.com/EricPuskas/react-material-cli">
              <IconButton aria-label="github" className={classes.githubButton}>
                <GitHubIcon />
              </IconButton>
            </Link>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </div>
  );
};
