import { Fragment } from "react";
/**
 * Imports components
 */
import { Banner } from "../Banner";
import { Features } from "../Features";
import { GetStartedSection } from "../GetStartedSection";

/**
 * Defines the props interface
 */
export interface LandingPageProps {}

/**
 * Displays the component
 */
export const LandingPage: React.FC<LandingPageProps> = () => {
  return (
    <Fragment>
      <Banner />
      <Features />
      <GetStartedSection />
    </Fragment>
  );
};
