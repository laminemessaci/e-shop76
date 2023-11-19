// TranslationContext.js
import React, { createContext, useContext, useState } from "react";
import * as Localization from "expo-localization";

export const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState(
    Localization.locale.split("-")[0] || "en"
  );

  const translations = {
    en: {
      greeting: "Hello, world!",
      farewell: "Goodbye!",
      Home: "Home",
      Cart: "Cart",
      Profile: "Profile",
      Settings: "Settings",
      Notifications: "Notifications",
      Search: "Search",
      Logout: "Logout",
      Language: "Language",
      French: "French",
      English: "English",
      Login: "Login",
      Register: "Register",
      Email: "Email",
      Password: "Password",
      Name: "Name",
      "Confirm Password": "Confirm Password",
      "Already have an account?": "Already have an account?",
      "Don't have an account?": "Don't have an account?",
      "Sign in": "Sign in",
    },
    fr: {
      greeting: "Bonjour le monde!",
      farewell: "Au revoir!",
      Home: "Accueil",
      Cart: "Panier",
      Profile: "Profil",
      Settings: "Paramètres",
      Notifications: "Notifications",
      Search: "Rechercher",
      Logout: "Se deconnecter",
      Language: "Langue",
      French: "Français",
      English: "Anglais",
      Login: "Se connecter",
      Register: "S'enregistrer",
      Email: "Email",
      Password: "Mot de passe",
      Name: "Nom",
      "Confirm Password": "Confirmer le mot de passe",
      "Already have an account?": "Vous avez déjà un compte?",
      "Don't have an account?": "Vous n'avez pas de compte?",
      "Sign in": "S'identifier",
    },
    ar: {
      greeting: "مرحبا بالعالم!",
      farewell: "مساء الخير!",
      Home: "الرئيسية",
      Cart: "السلة",
      Profile: "الملف الشخصي",
      Settings: "الاعدادات",
      Notifications: "الاشعارات",
      Messages: "الرسائل",
      Search: "بحث",
      Logout: "تسجيل خروج",
      Language: "لغة",
      French: "الفرنسية",
      English: "الانجليزية",
      Login: "تسجيل الدخول",
      Register: "تسجيل",
      Email: "البريد الالكتروني",
      Password: "كلمة المرور",
      Name: "الاسم",
      "Confirm Password": "تأكيد كلمة المرور",
      "Already have an account?": "هل لديك حساب؟",
      "Don't have an account?": "ليس لديك حساب؟",
      "Sign in": "تسجيل الدخول",
    },
  };

  if (!translations[language]) {
    throw new Error(`Unknown language "${language}"`);
  }

  const t = (key) => translations[language][key] || key;

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  const value = {
    t,
    changeLanguage,
    language,
  };

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
};
