/**
 * Imports components
 */
import { ThemeProvider } from "../../hooks";

/**
 * Displays the component
 */
export const Providers: React.FC = (props) => {
  const { children } = props;

  return <ThemeProvider>{children}</ThemeProvider>;
};
