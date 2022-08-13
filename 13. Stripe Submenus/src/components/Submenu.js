import { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "../context";

const Submenu = () => {
  const [columns, setColumns] = useState("col-2");
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext();
  const refContainer = useRef(null);
  const { center, bottom } = location;

  useEffect(() => {
    setColumns("col-2");
    refContainer.current.style.left = `${center}px`;
    refContainer.current.style.top = `${bottom}px`;
    if (links.length === 3) {
      setColumns("col-3");
    } else if (links.length > 3) {
      setColumns("col-4");
    }
  }, [location, links]);
  return (
    <aside
      className={isSubmenuOpen ? "submenu show" : "submenu"}
      ref={refContainer}
    >
      <h4>{page}</h4>
      <div className={`submenu-center ${columns}`}>
        {links.map((link, index) => {
          const { label, icon, url } = link;
          return (
            <a href={url} key={index}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;
