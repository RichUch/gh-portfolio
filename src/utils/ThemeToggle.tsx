import { useEffect, useState } from "react";
import { useCustomTranslation } from "../hooks/useCustomTranslation";
interface ThemeToggleProps {
  className?: string,
}

export default function ThemeToggle({className}: ThemeToggleProps) {
  const { t } = useCustomTranslation();
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={className}
    >
      {theme === "dark" ? `🌙` : `☀️`}
    </button>
  );
}
