import React, { useState, useEffect } from "react";
import Article from "./Article";
import data from "./data";

const getStorage = () => {
  return localStorage.getItem("theme")
    ? JSON.parse(localStorage.getItem("theme"))
    : "light-theme";
};

const App = () => {
  const [theme, setTheme] = useState(getStorage());

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };
  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>Dark Mode</h1>
          <button className="btn" onClick={toggleTheme}>
            toggle
          </button>
        </div>
      </nav>
      <section className="articles">
        {data.map(item => {
          return <Article key={item.id} {...item} />;
        })}
      </section>
    </main>
  );
};

export default App;
