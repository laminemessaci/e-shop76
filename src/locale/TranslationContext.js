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
      "Sign up": "Sign up",
      "Sign out": "Sign out",
      "Forgot Password?": "Forgot Password?",
      "Reset Password": "Reset Password",
      "Enter your email address below and we'll send you a link to reset your password":
        "Enter your email address below and we'll send you a link to reset your password",
      "Create Account": "Create Account",
      "Already have an account?": "Already have an account?",
      "Tell a Friend": "Tell a Friend",
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
      "Sign up": "S'inscrire",
      "Sign out": "Se deconnecter",
      "Forgot Password?": "Mot de passe oublie?",
      "Reset Password": "Reinitialiser le mot de passe",
      "Enter your email address below and we'll send you a link to reset your password":
        "Entrez votre adresse email ci-dessous et nous vous enverrons un lien pour reinitialiser votre mot de passe",
      "Create Account": "Creer un compte",
      "Already have an account?": "Vous avez déjà un compte?",
      "Tell a Friend": "Raconter un ami",
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
      "Sign up": "تسجيل",
      "Sign out": "تسجيل خروج",
      "Forgot Password?": "نسيت كلمة المرور؟",
      "Reset Password": "اعادة تعيين كلمة المرور",
      "Enter your email address below and we'll send you a link to reset your password":
        "ادخل عنوان بريدك الالكتروني ادناه وسوف نقوم بارسال لك رابط لاعادة تعيين كلمة المرور",
      "Create Account": "انشاء حساب",
      "Already have an account?": "هل لديك حساب؟",
      "Tell a Friend": "راسل صديق",
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
