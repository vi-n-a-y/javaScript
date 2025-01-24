import useLocalStroage from "./useLocalStroage";
import "./styles.css";

const DarkMode = () => {
  const [theme, setTheme] = useLocalStroage("theme", "dark");

  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  console.log(theme);
  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p>Hello World !</p>
        <button onClick={handleToggleTheme}>Change Theme </button>
      </div>
    </div>
  );
};

export default DarkMode;
