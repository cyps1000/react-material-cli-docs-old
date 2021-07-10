/**
 * External Imports
 */
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/**
 * Imports components
 */

import { Navigation } from "../Navigation";
import { LandingPage } from "../LandingPage";
import { Footer } from "../Footer";

/**
 * Displays the component
 */
export const Routes: React.FC = () => {
  return (
    <Router>
      <Route path="/">
        <Navigation appName="react-material-cli" />
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/docs/getting-started">
            <h2>Docs - Getting started</h2>
          </Route>
        </Switch>
        <Footer />
      </Route>
    </Router>
  );
};
