/**
 * Imports Material UI components
 */
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Tooltip,
  IconButton
} from "@material-ui/core/";

/**
 * Imports Material UI icons
 */
import MenuIcon from "@material-ui/icons/Menu";
import TranslateOutlinedIcon from "@material-ui/icons/TranslateOutlined";
import ArrowDropDownOutlinedIcon from "@material-ui/icons/ArrowDropDownOutlined";

/**
 * Imports Components
 */
import { GitHubRepoIcon } from "../GitHubRepoIcon";
import { ToggleTheme } from "../ToggleTheme";
import { Searchbar } from "../Searchbar";

/**
 * Imports hooks
 */
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../hooks";

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
   * Gets the translator
   */
  const { t } = useTranslation();

  /**
   * Inits the language hook
   */
  const { activeLanguage } = useLanguage();
  console.log(activeLanguage);

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
          <Tooltip
            title="Change language"
            aria-label="language"
            placement="bottom"
          >
            <Button color="secondary" className={classes.languageSelector}>
              <TranslateOutlinedIcon />
              {t(`${activeLanguage}Label`)}
              <ArrowDropDownOutlinedIcon />
            </Button>
          </Tooltip>
          <ToggleTheme />
          <GitHubRepoIcon />
          <Searchbar />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
