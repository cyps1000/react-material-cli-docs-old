import { createContext } from "react";

/**
 * Defines the theme types
 */
export type ThemeType = "dark" | "light";

/**
 * Defines the Provider Values Interface
 */
export interface ProviderValues {
  activeTheme: ThemeType;
  changeTheme: (themeKey: ThemeType) => void;
}

/**
 * Defines the default values
 */
export const defaultValues: ProviderValues = {
  activeTheme: "dark",
  changeTheme: () => {}
};

/**
 * Defines a context where the state is stored and shared
 *
 * - This serves as a cache.
 * - Rather than each instance of the hook fetch the current state, the hook simply calls useContext to get the data from the top level provider
 */
export const context = createContext<ProviderValues>(defaultValues);
