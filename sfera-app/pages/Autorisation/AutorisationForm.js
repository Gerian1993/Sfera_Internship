import { useState } from "react";

import Special_menu from "./Special_menu";
import Form from "./Form";

export default function AutorisationForm() {
  const [lang, setLang] = useState("ru");
  const [theme, setTheme] = useState("light");

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
      h1: "Autorisation",
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
      h1: "자동화",
      li: [
        { label: "러시아인", key: "ru" },
        { label: "영어", key: "en" },
        { label: "한국인", key: "kor" },
      ],
      email: "이메일",
      password: "비밀번호",
      button: "제출하다",
      signOut: "출구",
    },
  };

  return (
    <div className="wrapper">
      <Special_menu
        langs={langs}
        lang={lang}
        setLang={setLang}
        theme={theme}
        setTheme={setTheme}
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

