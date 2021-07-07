import React, { useEffect } from "react";

/**
 * Imports i18n
 */
import i18n from "../../i18n";
import { Language } from "../../translations";

/**
 * Imports the context
 */
import { context, ProviderValues } from "./Context";
import { I18nextProvider } from "react-i18next";

/**
 * Imports hooks
 */
import { useLocalStorage } from "../useLocalStorage";

/**
 * Provides a top level wrapper with the context
 *
 * - This is the main provider
 * - It makes the object available to any child component that calls the hook.
 */

interface LanguageProviderProps {
  langKey?: Language;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = (props) => {
  const { children, langKey } = props;

  /**
   * Gets the Provider from the context
   */
  const { Provider } = context;

  /**
   * Defines the default language
   */
  const defaultLng = i18n.language as Language;

  /**
   * Initializes the active theme
   */
  const [activeLanguage, setActiveLanguage] = useLocalStorage<Language>(
    "i18nextLng",
    defaultLng
  );

  /**
   * Handles changing the languageKey key
   */
  const changeLanguage = (languageKey: Language) => {
    setActiveLanguage(languageKey);
    i18n.changeLanguage(languageKey);
  };

  /**
   * Handles rendering the i18next provider
   */
  const renderI18nextProvider = () => {
    if (process.env.NODE_ENV === "test") return children;
    return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
  };

  /**
   * Defines the provider value
   * These values will be available to any children component that calls the hook
   */
  const providerValue: ProviderValues = {
    activeLanguage: activeLanguage || "en_en",
    changeLanguage,
    languages: ["en_en", "en_ro", "en_hu"]
  };

  /**
   * Optionally receive a language key to set the active language
   * Used by storybook primarily
   */
  useEffect(() => {
    if (langKey) changeLanguage(langKey);
    // eslint-disable-next-line
  }, [langKey]);

  return <Provider value={providerValue}>{renderI18nextProvider()}</Provider>;
};
