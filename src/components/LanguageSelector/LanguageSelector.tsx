/**
 * External Imports
 */
import { v4 } from "uuid";

/**
 * Imports Material UI components
 */
import { Box } from "@material-ui/core";

/**
 * Imports components
 */
import { Popper, PopperRenderProps } from "../Popper";
import { LanguageMenuItem } from "../LanguageMenuItem";
import { ActiveLanguage } from "../ActiveLanguage";

/**
 * Imports hooks
 */
import { useLanguage } from "../../hooks";

/**
 * Imports the component styles
 */
import { useStyles } from "./LanguageSelector.styles";

/**
 * Displays the component
 */
export const LanguageSelector: React.FC = (props) => {
  /**
   * Gets the component styles
   */
  const classes = useStyles();

  /**
   * Gets the language state
   */
  const { languages } = useLanguage();

  /**
   * Handles rendering the menu popper content
   */
  const renderPopperContent = (props: PopperRenderProps) => {
    const { closePopper } = props;

    return languages.map((language) => (
      <LanguageMenuItem key={v4()} language={language} onClick={closePopper} />
    ));
  };

  return (
    <Box className={classes.LanguageSelector}>
      <Popper
        containerClassname={classes.popperContainer}
        render={renderPopperContent}
      >
        <ActiveLanguage />
      </Popper>
    </Box>
  );
};
