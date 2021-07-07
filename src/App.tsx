import { Fragment } from "react";

/**
 * Normalizes all css for maximum browser compatibility
 */
import CssBaseLine from "@material-ui/core/CssBaseline";

/**
 * Imports components
 */
import { Providers } from "./components/Providers";
import { Navigation } from "./components/Navigation";

/**
 * Displays the component
 */
export const App: React.FC = () => {
  return (
    <Fragment>
      <CssBaseLine />
      <Providers>
        <Navigation appName="react-material-cli" />
      </Providers>
    </Fragment>
  );
};
