import { useState } from "react";
import Categories from "./components/Categories";
import Menu from "./components/Menu";
import data from "./data";

const allCategories = [
  "all",
  ...new Set(data.map(menuItem => menuItem.category)),
];

const App = () => {
  const [menuItems, setMenuItems] = useState(data);
  const [categories] = useState(allCategories);

  const filterCategories = category => {
    const newCategories = data.filter(
      menuItem => menuItem.category === category
    );
    setMenuItems(newCategories);
    if (category === "all") {
      setMenuItems(data);
    }
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories
          menuItems={menuItems}
          allCategories={categories}
          filterCategories={filterCategories}
        />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};

export default App;
