"use client";

import { useLanguage } from "../context/LanguageContext";

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center justify-center bg-surface border border-outline px-3 py-1.5 rounded-full shadow-sm hover:bg-primary-container transition-colors duration-300 group"
      aria-label="Toggle Language"
    >
      <span className={`text-sm font-semibold transition-colors duration-300 ${language === 'id' ? 'text-primary' : 'text-outline'}`}>
        ID
      </span>
      <span className="mx-1 text-outline text-xs">/</span>
      <span className={`text-sm font-semibold transition-colors duration-300 ${language === 'en' ? 'text-primary' : 'text-outline'}`}>
        EN
      </span>
    </button>
  );
}
