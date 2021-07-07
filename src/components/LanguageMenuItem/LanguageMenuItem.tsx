import { forwardRef } from "react";

/**
 * Imports Material UI components
 */
import { Box, MenuItem, Typography } from "@material-ui/core";

/**
 * Imports hooks
 */
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../hooks";

/**
 * Imports the component styles
 */
import { useStyles } from "./LanguageMenuItem.styles";

/**
 * Imports types
 */
import { Language } from "../../translations";

/**
 * Defines the props interface
 */
export interface LanguageMenuItemProps {
  language: Language;
  onClick: () => void;
}

/**
 * Displays the component
 */
export const LanguageMenuItem = forwardRef<
  HTMLLIElement,
  LanguageMenuItemProps
>((props, ref) => {
  const { language, onClick } = props;

  /**
   * Gets the component styles
   */
  const classes = useStyles();

  /**
   * Gets the translator
   */
  const { t } = useTranslation();

  /**
   * Gets the language state
   */
  const { changeLanguage } = useLanguage();

  /**
   * Handles clicking on a language item
   */
  const handleClick = () => {
    changeLanguage(language);
    onClick();
  };

  return (
    <MenuItem className={classes.menuItem} ref={ref} onClick={handleClick}>
      <Box className={classes.LanguageMenuItem}>
        <Box className={classes.item}>
          <Typography variant="caption" className={classes.abbreviation}>
            {t(`${language}Label`)}
          </Typography>
        </Box>
      </Box>
    </MenuItem>
  );
});
