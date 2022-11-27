import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";

import Special_menu from "./Special_menu";
import Form from "./Form";

export default function Home() {
  const [lang, setLang] = useState("ru");
  const [theme, setTheme] = useState("light");
  const [themeImg, setThemeImg] = useState("free-icon-brightness-2280442.png");

  const langs = {
    ["ru"]: {
      h1: "Авторизация",
      li: [
        { label: "Русский", key: "ru" },
        { label: "Английский", key: "en" },
        { label: "Корейский", key: "kor" },
      ],
      email: "Ваш e-mail",
      password: "Пароль",
      button: "Отправить",
      signOut: "Выход",
    },
    ["en"]: {
      h1: "Avtorisation",
      li: [
        { label: "Russian", key: "ru" },
        { label: "English", key: "en" },
        { label: "Korean", key: "kor" },
      ],
      email: "E-mail",
      password: "Password",
      button: "Submit",
      signOut: "Exit",
    },
    ["kor"]: {
      h1: "Bla",
      li: [
        { label: "blasРусский", key: "ru" },
        { label: "LagАнглийский", key: "en" },
        { label: "fsdКорейский", key: "kor" },
      ],
      email: "Bla e-mail",
      password: " blaПароль",
      button: "BlaОтправить",
      signOut: "BlaExin",
    },
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Special_menu
        langs={langs}
        lang={lang}
        setLang={setLang}
        theme={theme}
        setTheme={setTheme}
        themeImg={themeImg}
        setThemeImg={setThemeImg}
      />
      <Form
        email={langs[lang].email}
        password={langs[lang].password}
        button={langs[lang].button}
        signOut={langs[lang].signOut}
        theme={theme}
      />
    </div>
  );
}
