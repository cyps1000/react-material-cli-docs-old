/**
 * External imports
 */
import { Link } from "react-router-dom";

/**
 * Imports Material UI components
 */
import { Grid, Typography, Paper, Link as MuiLink } from "@material-ui/core";

/**
 * Imports hooks
 */
import { useNavigation } from "../../hooks";

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

  /**
   * Gets the paths
   */
  const { Paths } = useNavigation();

  return (
    <Paper square className={classes.Footer}>
      <Grid container className={classes.container}>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Typography gutterBottom variant="h6" color="secondary">
            Docs
          </Typography>
          <Typography>
            <Link to={Paths.DocsGetStarted}>Get Started</Link>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Typography gutterBottom variant="h6" color="secondary">
            Community
          </Typography>
          <Typography>
            <MuiLink target="_blank" href="#">
              Discord
            </MuiLink>
          </Typography>
          <Typography>
            <MuiLink
              target="_blank"
              href="https://github.com/EricPuskas/react-material-cli/discussions/"
            >
              GitHub Discussions
            </MuiLink>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Typography gutterBottom variant="h6" color="secondary">
            Social
          </Typography>
          <Typography>
            <MuiLink
              target="_blank"
              href="https://github.com/EricPuskas/react-material-cli/"
            >
              GitHub
            </MuiLink>
          </Typography>
        </Grid>
      </Grid>
      <Typography
        variant="h6"
        color="secondary"
        className={classes.copyrightText}
      >
        <MuiLink
          target="_blank"
          href="https://github.com/EricPuskas/react-material-cli/blob/main/LICENSE"
        >
          MIT
        </MuiLink>{" "}
        License. Copyright © 2021 Eric Puskas
      </Typography>
    </Paper>
  );
};
