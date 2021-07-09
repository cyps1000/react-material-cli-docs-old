import { Fragment } from "react";

/**
 * Normalizes all css for maximum browser compatibility
 */
import CssBaseLine from "@material-ui/core/CssBaseline";

/**
 * Imports components
 */
import { Body } from "./components/Body";
import { Providers } from "./components/Providers";
import { Navigation } from "./components/Navigation";
import { Banner } from "./components/Banner";
import { Features } from "./components/Features";
import { GetStartedSection } from "./components/GetStartedSection";
import { Footer } from "./components/Footer";

/**
 * Displays the component
 */
export const App: React.FC = () => {
  return (
    <Fragment>
      <CssBaseLine />
      <Providers>
        <Body>
          <Navigation appName="react-material-cli" />
          <Banner />
          <Features />
          <GetStartedSection />
          <Footer />
        </Body>
      </Providers>
    </Fragment>
  );
};
