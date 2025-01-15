import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

const ThemeSwitcher = ({ theme, toggleTheme }) => {
  return (
    <div className="flex items-center justify-center space-x-3">
      <IoSunnyOutline
        onClick={() => toggleTheme(false)}
        size={22}
        className="text-yellow-400 dark:text-gray-600"
      />

      <div
        onClick={() => toggleTheme(theme !== "dark")}
        className="relative inline-flex h-6 w-11 items-center rounded-full cursor-pointer bg-gray-200 dark:bg-purple-600"
      >
        <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-1 dark:translate-x-6"></span>
      </div>

      <IoMoonOutline
        onClick={() => toggleTheme(true)}
        size={22}
        className="text-gray-600 dark:text-purple-600"
      />
    </div>
  );
};

export default ThemeSwitcher;
