import fr from "./fr.json";
import en from "./en.json";
import * as Localization from "expo-localization";

const data = {
  fr,
  en,
} as { [key: string]: { [key: string]: string } };

/**
 * Sets the application language based on the user's locale.
 * If the user's locale is not supported, fallback to English.
 *
 * @returns {string} The selected language.
 */
export const setAppLang = (): string => {
  let trad: string = Localization.locale.split("-")[0];

  if (!data.hasOwnProperty(trad)) {
    trad = "en";
  }
  return trad;
};

/**
 * Translates a keyword into the corresponding language-specific text.
 * @param {string} keyWord - The keyword to be translated.
 * @returns {string} - The translated text.
 */
export function translate(keyWord: string = "NOT_DEFINE"): string {
  let lang: string = setAppLang();
  return data[lang]?.[keyWord] || data[lang]?.["NOT_DEFINE"];
}
