/**
 * Imports Material UI components
 */
import { Container, Box, Typography } from "@material-ui/core/";

/**
 * Imports the component styles
 */
import { useStyles } from "./Features.styles";

/**
 * Defines the props interface
 */
export interface FeaturesProps {}

/**
 * Displays the component
 */
export const Features: React.FC<FeaturesProps> = () => {
  /**
   * Gets the component styles
   */
  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.Features}>
      <Typography className={classes.title}>Features</Typography>
      <Box className={classes.featuresPreview}>
        <Typography>Boilerplate components (early-version)</Typography>
        <Typography>Ready-to-go components (work-in-progress)</Typography>
        <Typography>Typescript ready</Typography>
      </Box>
    </Container>
  );
};
