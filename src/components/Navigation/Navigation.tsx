/**
 * Imports Material UI components
 */
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Tooltip
} from "@material-ui/core/";

/**
 * Imports Font Awesome icons
 */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";

/**
 * Imports Components
 */
import { GitHubRepoIcon } from "../GitHubRepoIcon";
import { ToggleTheme } from "../ToggleTheme";
import { Searchbar } from "../Searchbar";
import { LanguageSelector } from "../LanguageSelector";
import { PackageVersion } from "../PackageVersion";

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
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="secondary"
            aria-label="menu"
            disableRipple
          >
            <FontAwesomeIcon aria-label="react-logo" icon={faReact} />
            <Typography variant="h6" className={classes.title}>
              {appName}
            </Typography>
          </IconButton>
          <PackageVersion />
          <Box className={classes.menuItems}>
            <Tooltip
              title="Go to documentation"
              aria-label="documentation"
              placement="bottom"
            >
              <Button aria-label="docs" color="secondary">
                Docs
              </Button>
            </Tooltip>
            <LanguageSelector />
            <ToggleTheme />
            <GitHubRepoIcon />
            <Searchbar />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
