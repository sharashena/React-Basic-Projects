import { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const ulContainer = useRef(null);
  const linksContainer = useRef(null);

  useEffect(() => {
    const height = linksContainer.current.getBoundingClientRect().height;
    if (show) {
      ulContainer.current.style.height = `${height}px`;
    } else {
      ulContainer.current.style.height = 0;
    }
  }, [show]);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button className="nav-toggle" onClick={() => setShow(!show)}>
            <FaBars />
          </button>
        </div>
        <div
          className={
            show ? "links-container show-container" : "links-container"
          }
          ref={ulContainer}
        >
          <ul className="links" ref={linksContainer}>
            {links.map(link => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map(icon => {
            const { id, url, icon: socialIcon } = icon;
            return (
              <li key={id}>
                <a href={url}>{socialIcon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
