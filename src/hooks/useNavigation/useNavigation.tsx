/**
 * Imports hooks
 */
import { useHistory } from "react-router-dom";

/**
 * Defines the paths
 */
export enum Paths {
  LandingPage = "/",
  DocsGetStarted = "/docs/getting-started"
  /** To add more routes */
}

/**
 * Defines the main hook
 */
export const useNavigation = () => {
  /**
   * Gets the history object
   */
  const history = useHistory();

  /**
   * Handles going to a route
   */
  const goTo = (path: Paths) => history.push(path);

  /**
   * Handles getting all the route paths
   */
  const getPaths = () => Object.values(Paths) as string[];

  /**
   * Handles going back
   */
  const goBack = () => history.goBack();

  return {
    goTo,
    goBack,
    getPaths,
    Paths
  };
};
