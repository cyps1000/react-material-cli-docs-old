/**
 * Imports Material UI components
 */
import { Box, Link, Tooltip, IconButton } from "@material-ui/core/";

/**
 * Imports Material UI icons
 */
import GitHubIcon from "@material-ui/icons/GitHub";

/**
 * Imports the component styles
 */
import { useStyles } from "./GitHubRepoIcon.styles";

/**
 * Displays the component
 */
export const GitHubRepoIcon: React.FC = () => {
  /**
   * Gets the component styles
   */
  const classes = useStyles();

  return (
    <Box className={classes.GitHubRepoIcon}>
      <Tooltip title="GitHub Repository" aria-label="github" placement="bottom">
        <Link
          target="_blank"
          href="https://github.com/EricPuskas/react-material-cli"
        >
          <IconButton aria-label="github" color="secondary">
            <GitHubIcon />
          </IconButton>
        </Link>
      </Tooltip>
    </Box>
  );
};
