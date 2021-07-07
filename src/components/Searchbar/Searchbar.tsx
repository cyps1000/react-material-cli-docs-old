/**
 * Imports Material UI components
 */
import { Box, InputBase } from "@material-ui/core/";

/**
 * Imports Material UI icons
 */
import SearchIcon from "@material-ui/icons/Search";

/**
 * Imports hooks
 */
import { useTranslation } from "react-i18next";

/**
 * Imports the component styles
 */
import { useStyles } from "./Searchbar.styles";

/**
 * Displays the component
 */
export const Searchbar: React.FC = () => {
  /**
   * Gets the component styles
   */
  const classes = useStyles();

  /**
   * Gets the translator
   */
  const { t } = useTranslation();

  return (
    <Box className={classes.Searchbar}>
      <Box className={classes.searchIcon}>
        <SearchIcon />
      </Box>
      <InputBase
        placeholder={t("search")}
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput
        }}
        inputProps={{ "aria-label": "search" }}
      />
    </Box>
  );
};
