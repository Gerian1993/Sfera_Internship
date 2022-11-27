

import styles from "../styles/Special_menu.module.css";

const Special_menu = (props) => {


  const langs = props.langs;
  const lang = props.lang;
  const theme = props.theme;
  const themeImg = props.themeImg;


  console.log(theme);
  console.log(themeImg);


  const toggleTheme = (theme,themeImg) => {
    if (theme === "light" && themeImg === 'free-icon-brightness-2280442.png') {
      props.setTheme("dark");
      props.setThemeImg('free-icon-moon-6695676.png')
      console.log(theme);
    } else {
      props.setTheme("light");
      props.setThemeImg('free-icon-brightness-2280442.png')
      console.log(theme);
    }
  };


  const toggleLang = (key) => {
    props.setLang(key);
    console.log(key);
  };



  return (
    <div className={styles.wrapper}>
      <h1 className={styles.h1}>{langs[lang].h1}</h1>
      <div className={theme === "light" ? styles.divlight : styles.divdark}>
        <ul className={styles.ul}>
          {langs[lang].li.map((item, id) => {
            return (
              <li
              onClick={() => toggleLang(item.key)}
              className={styles.li}
              key={id}
            >
              {item.label}
            </li>
            )
          })}
        </ul>
        <img
          src={themeImg}
          className={styles.img}
          onClick={()=>{toggleTheme(theme, themeImg)}}
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
};

export default Special_menu;
