# Understanding Context API with a Theme Toggler App

## What is Context API?
The Context API in React is a feature that allows you to manage and share state globally across your application without manually passing props at every level of your component tree. It's particularly useful for managing themes, user data, or language preferences that need to be accessed by multiple components.

---

## Theme Toggler App
In this app, we demonstrate the Context API by creating a simple theme toggler that switches between light and dark modes. The selected theme is applied to the entire app.

---

## Project Overview
### **Features**:
- Switch between Light and Dark themes.
- Apply the selected theme globally across the app.
- Avoid prop drilling by using Context API.

### **Files Structure**:
```plaintext
src/
|-- ThemeContext.jsx
|-- App.jsx
|-- main.jsx
```

---

## How It Works

### 1. **Create a Context**:
We create a `ThemeContext` that stores the theme state (`light` or `dark`) and a function to toggle the theme.

**`ThemeContext.jsx`**:
```jsx
import { createContext, useState } from "react";

// Create the context
export const ThemeContext = createContext();

// Provider component
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
```
- `ThemeContext` is created using `createContext()`.
- `ThemeProvider` wraps the app and provides theme-related data to all components.

---

### 2. **Wrap the App with the Provider**:
The `ThemeProvider` is used in `main.jsx` to wrap the entire application, making the theme data available globally.

**`main.jsx`**:
```jsx
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "./ThemeContext";

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
```
- All components inside `ThemeProvider` can access the theme and toggle function.

---

### 3. **Consume Context in Components**:
The `App` component uses the `useContext` hook to access and utilize the theme and toggle function.

**`App.jsx`**:
```jsx
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const appStyle = {
    backgroundColor: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

  return (
    <div style={appStyle}>
      <h1>{theme === "light" ? "Light Mode" : "Dark Mode"}</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
}

export default App;
```
- `useContext(ThemeContext)` fetches the current theme and the toggle function.
- The theme dynamically updates the app's style based on the current mode.
- A button toggles between light and dark modes.

---

## Key Concepts:
1. **Context Creation**: Use `createContext()` to create a new context.
2. **Context Provider**: Wrap your app with the provider to supply shared state.
3. **Context Consumer**: Use `useContext()` to access context data in components.

---

## How to Run the App
1. Create a React app using:
   ```bash
   npx create-react-app theme-toggler
   cd theme-toggler
   ```
2. Replace files with the code provided above.
3. Start the app:
   ```bash
   npm start
   ```

---

### Final Output
- The app switches between Light and Dark modes.
- The selected theme is applied globally, and no prop drilling is required.

---

The Context API simplifies state sharing and management, making your React apps more maintainable and efficient.
