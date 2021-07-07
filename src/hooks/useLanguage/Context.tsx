import { createContext } from "react";

/**
 * Imports i18n
 */
import { Language } from "../../translations";

/**
 * Defines the Provider Values Interface
 */
export interface ProviderValues {
  activeLanguage: Language;
  languages: Language[];
  changeLanguage: (languageKey: Language) => void;
}

/**
 * Defines the default values
 */
export const defaultValues: ProviderValues = {
  activeLanguage: "en_en",
  languages: [],
  changeLanguage: () => {}
};

/**
 * Defines a context where the state is stored and shared
 *
 * - This serves as a cache.
 * - Rather than each instance of the hook fetch the current state, the hook simply calls useContext to get the data from the top level provider
 */
export const context = createContext<ProviderValues>(defaultValues);
