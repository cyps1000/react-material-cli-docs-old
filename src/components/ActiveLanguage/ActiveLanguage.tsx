import { forwardRef } from "react";

/**
 * Imports Material UI components
 */
import { Button, Tooltip } from "@material-ui/core/";

/**
 * Imports Material UI icons
 */
import TranslateOutlinedIcon from "@material-ui/icons/TranslateOutlined";
import ArrowDropDownOutlinedIcon from "@material-ui/icons/ArrowDropDownOutlined";

/**
 * Imports hooks
 */
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../hooks";

/**
 * Imports the component styles
 */
import { useStyles } from "./ActiveLanguage.styles";

/**
 * Defines the props interface
 */
export interface ActiveLanguageProps {
  onClick?: () => void;
}

/**
 * Displays the component
 */
export const ActiveLanguage = forwardRef<
  HTMLButtonElement,
  ActiveLanguageProps
>((props, ref) => {
  const { onClick } = props;

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

  return (
    <Tooltip title="Change language" aria-label="language" placement="bottom">
      <Button
        onClick={onClick}
        ref={ref}
        color="secondary"
        className={classes.languageSelector}
      >
        <TranslateOutlinedIcon />
        {t(`${activeLanguage}Label`)}
        <ArrowDropDownOutlinedIcon />
      </Button>
    </Tooltip>
  );
});
