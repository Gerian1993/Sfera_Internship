import { useState } from "react";

import styles from "../styles/Special_menu.module.css";

const Special_menu = (props) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      console.log(theme);
    } else {
      setTheme("light");
      console.log(theme);
    }
  };

  const langs = props.langs;
  const lang = props.lang;

  const toggleLang = (key) => {
    props.setLang(key);
    console.log(key);
  };

  console.log(Object.keys(langs).length);


/*   const makeLang = () => {
    for (let i = 0; i < Object.keys(langs).length; i++) {}
  };

  makeLang(); */

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.h1}>{langs[lang].h1}</h1>
      <div className={theme === "light" ? styles.divlight : styles.divdark}>
        <ul className={styles.ul}>
          {langs[lang].li.map((item) => {
            return (
              <li
              onClick={() => toggleLang(item.key)}
              className={styles.li}
            >
              {item.label}
            </li>
            )
          })}
        </ul>
        <img
          src="free-icon-brightness-2280442.png"
          alt="light"
          className={styles.img}
          onClick={toggleTheme}
          style={{ cursor: "pointer" }}
        />
        <img
          src="free-icon-moon-6695676.png"
          alt="dark"
          className={styles.img}
          onClick={toggleTheme}
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
};

export default Special_menu;
