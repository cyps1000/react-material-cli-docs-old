/**
 * Imports Material UI components
 */
import { Container, Box, Typography, Paper } from "@material-ui/core/";

/**
 * Imports the component styles
 */
import { useStyles } from "./GetStartedSection.styles";

/**
 * Defines the props interface
 */
export interface GetStartedSectionProps {}

/**
 * Displays the component
 */
export const GetStartedSection: React.FC<GetStartedSectionProps> = (props) => {
  /**
   * Gets the component styles
   */
  const classes = useStyles();

  return (
    <Paper className={classes.paper} elevation={0} square>
      <Container maxWidth="md" className={classes.GetStartedSection}>
        <Typography className={classes.title}>
          Get started in seconds
        </Typography>
        <Box className={classes.featuresPreview}>
          <Typography gutterBottom>
            To create a component called Button, run this command:
          </Typography>
          <Paper className={classes.code}>
            <code>npx react-material-cli Button</code>
          </Paper>
        </Box>
      </Container>
    </Paper>
  );
};
