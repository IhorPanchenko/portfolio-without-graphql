import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

const ThemeSwitcher = ({ theme, toggleTheme }) => {
  return (
    <div className="flex items-center justify-center space-x-3">
      <IoSunnyOutline
        onClick={() => toggleTheme(false)}
        size={22}
        className={`${theme === "dark" ? "text-gray-600" : "text-yellow-400"}`}
      />

      <div
        onClick={() => toggleTheme(theme !== "dark")}
        className={`${
          theme === "dark" ? "bg-purple-600" : "bg-gray-200"
        } relative inline-flex h-6 w-11 items-center rounded-full cursor-pointer`}
      >
        <span
          className={`${
            theme === "dark" ? "translate-x-6" : "translate-x-1"
          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
        ></span>
      </div>

      <IoMoonOutline
        onClick={() => toggleTheme(true)}
        size={22}
        className={`${theme === "dark" ? "text-purple-600" : "text-gray-600"}`}
      />
    </div>
  );
};

export default ThemeSwitcher;
