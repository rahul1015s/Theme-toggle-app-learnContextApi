import { createContext, useState } from "react";

// create the context
export const ThemeContext = createContext();

// context provider component
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  // toggle function
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
