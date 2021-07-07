import React, { useEffect } from "react";

/**
 * Imports Material UI Components
 */
import {
  ThemeProvider as ThemeProviderMui,
  createTheme
} from "@material-ui/core/styles";

/**
 * Imports themes
 */
import { darkTheme } from "../../themes/dark-theme";
import { lightTheme } from "../../themes/light-theme";

/**
 * Imports the context
 */
import { context, ProviderValues, ThemeType } from "./Context";

/**
 * Imports hooks
 */
import { useLocalStorage } from "../useLocalStorage";

interface ThemeProviderProps {
  themeKey?: ThemeType;
}

/**
 * Provides a top level wrapper with the context
 *
 * - This is the main provider
 * - It makes the object available to any child component that calls the hook.
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  const { children, themeKey } = props;

  /**
   * Gets the Provider from the context
   */
  const { Provider } = context;

  /**
   * Initializes the active theme
   */
  const [activeTheme, setActiveTheme] = useLocalStorage<ThemeType>(
    "activeTheme",
    "light"
  );

  /**
   * Handles changing the theme key
   */
  const changeTheme = (themeKey: ThemeType) => setActiveTheme(themeKey);

  /**
   * Handles getting the theme data
   */
  const getTheme = () => {
    let theme = darkTheme;

    if (activeTheme === "light") {
      theme = lightTheme;
    }

    return createTheme(theme);
  };

  /**
   * Defines the provider value
   * These values will be available to any children component that calls the hook
   */
  const providerValue: ProviderValues = {
    activeTheme: activeTheme || "dark",
    changeTheme
  };

  /**
   * Resets the overflow style on the body upon loading index.html
   */
  useEffect(() => {
    const rootBody = document.getElementById("root-body");
    if (rootBody) rootBody.removeAttribute("style");
  }, []);

  /**
   * Optionally receive a theme key to set the active theme
   * Used by storybook primarily
   */
  useEffect(() => {
    if (themeKey) setActiveTheme(themeKey);
    // eslint-disable-next-line
  }, [themeKey]);

  return (
    <Provider value={providerValue}>
      <ThemeProviderMui theme={getTheme()}>{children}</ThemeProviderMui>
    </Provider>
  );
};
