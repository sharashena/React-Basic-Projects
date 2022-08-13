import { useState, useEffect } from "react";

const SingleColor = ({ rgb, weight, index, colorHex }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  const clr = `rgb(${bcg})`;
  const hexValue = `#${colorHex}`;

  useEffect(() => {
    const effect = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => clearTimeout(effect);
  }, [alert]);
  return (
    <article
      className={index > 10 ? "color color-light" : "color"}
      style={{ backgroundColor: clr }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
