import { useContext } from "react";

/**
 * Imports the context
 */
import { context } from "./Context";

/**
 * Imports the provider
 */
import { ThemeProvider } from "./Provider";

/**
 * Defines the main hook
 *
 * - Returns the context / object
 * - To be used inside components
 */
const useTheme = () => useContext(context);

export { useTheme, ThemeProvider };
