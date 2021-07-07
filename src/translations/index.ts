/**
 * Defines the Language Resource Interface
 */
export interface LanguageResource {
  [key: string]: string;
}

/**
 * Defines the Language Key Type
 */
export type Language = "en_en" | "en_ro" | "en_hu";

/**
 * Exports resources
 */
export * from "./en_en";
export * from "./en_ro";
export * from "./en_hu";
