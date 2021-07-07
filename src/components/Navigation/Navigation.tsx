/**
 * Imports Material UI components
 */
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton
} from "@material-ui/core/";

/**
 * Imports Material UI icons
 */
import MenuIcon from "@material-ui/icons/Menu";

/**
 * Imports Components
 */
import { GitHubRepoIcon } from "../GitHubRepoIcon";
import { ToggleTheme } from "../ToggleTheme";
import { Searchbar } from "../Searchbar";
import { LanguageSelector } from "../LanguageSelector";

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

  return (
    <Box className={classes.Navigation}>
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
          <LanguageSelector />
          <ToggleTheme />
          <GitHubRepoIcon />
          <Searchbar />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
