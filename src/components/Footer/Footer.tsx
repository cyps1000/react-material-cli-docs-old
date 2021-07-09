/**
 * Imports Material UI components
 */
import { AppBar, Toolbar, Typography } from "@material-ui/core";

/**
 * Imports the component styles
 */
import { useStyles } from "./Footer.styles";

/**
 * Defines the props interface
 */
export interface FooterProps {}

/**
 * Displays the component
 */
export const Footer: React.FC<FooterProps> = () => {
  /**
   * Gets the component styles
   */
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.Footer}>
      <Toolbar variant="dense">
        <Typography variant="h6" color="secondary">
          Copyright © 2021 EricPuskas
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
