import styles from "../styles/Special_menu.module.css";

const Special_menu = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.h1}>Bla</h1>
      <div className={styles.div}>
        <ul className={styles.ul}>
          <li>Русский</li>
          <li>Английский</li>
          <li>Корейский</li>
        </ul>
            <img src='free-icon-brightness-2280442.png' alt='light' className={styles.img}/>
            <img src='free-icon-moon-6695676.png' alt='dark' className={styles.img}/>
      </div>
    </div>
  );
};

export default Special_menu;
