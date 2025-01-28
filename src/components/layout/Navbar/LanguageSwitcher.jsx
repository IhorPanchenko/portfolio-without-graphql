const LanguageSwitcher = ({ handleLanguageChange, currentLanguage }) => {
  return (
    <div className="space-x-4 text-lg text-gray-600 dark:text-gray-200">
      <button
        onClick={() => handleLanguageChange("en")}
        className={`hover:text-purple-700 dark:hover:text-purple-400 ${
          currentLanguage === "en"
            ? "text-purple-700 dark:text-purple-400 font-bold"
            : ""
        }transition duration-300`}
      >
        EN
      </button>
      <button
        onClick={() => handleLanguageChange("de")}
        className={`hover:text-purple-700 dark:hover:text-purple-400 ${
          currentLanguage === "de"
            ? "text-purple-700 dark:text-purple-400 font-bold"
            : ""
        }transition duration-300`}
      >
        DE
      </button>
    </div>
  );
};

export default LanguageSwitcher;
