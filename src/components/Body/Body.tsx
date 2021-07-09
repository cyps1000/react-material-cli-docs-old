/**
 * Imports the component styles
 */
import { useStyles } from "./Body.styles";

/**
 * Defines the props interface
 */
export interface BodyProps {}

/**
 * Displays the component
 */
export const Body: React.FC<BodyProps> = (props) => {
  const { children } = props;

  /**
   * Gets the component styles
   */
  const classes = useStyles();

  return <section className={classes.Body}>{children}</section>;
};
