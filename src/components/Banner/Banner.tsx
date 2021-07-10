/**
 * Imports Material UI components
 */
import { Paper, Container, Typography, Button } from "@material-ui/core";

/**
 * Imports Font Awesome icons
 */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";

/**
 * Imports hooks
 */
import { useNavigation } from "../../hooks";

/**
 * Imports the component styles
 */
import { useStyles } from "./Banner.styles";

/**
 * Defines the props interface
 */
export interface BannerProps {}

/**
 * Displays the component
 */
export const Banner: React.FC<BannerProps> = () => {
  /**
   * Gets the component styles
   */
  const classes = useStyles();

  /**
   * Gets the paths
   */
  const { Paths, goTo } = useNavigation();

  /**
   * Defines the routing functions
   */
  const goToDocs = () => goTo(Paths.DocsGetStarted);

  return (
    <Paper className={classes.Banner} elevation={0} square>
      <Container maxWidth="md" className={classes.container}>
        <FontAwesomeIcon aria-label="react-logo" size="7x" icon={faReact} />
        <Typography gutterBottom className={classes.title}>
          react-material-cli
        </Typography>
        <Typography variant="h5">
          Generate custom react components and hooks that follow best practices
          and the highest standards of implementation.
        </Typography>
        <Button
          size="large"
          variant="outlined"
          color="primary"
          className={classes.button}
          onClick={goToDocs}
        >
          Get Started
        </Button>
      </Container>
    </Paper>
  );
};
