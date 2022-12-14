import { useState, useEffect } from "react";
import jwt_decode from 'jwt-decode';


const Form = (props) => {
  const langs = props;
  const theme = props.theme;




  console.log(props)

  const [user, setUser] = useState({});

  function handleCallbackResponse(response) {
    // вывод токена пользователя в консоль и его декодинг
    console.log("Encoded JWT ID token: " + response.credential);
    const userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);

    // скрытие форм
    document.getElementById("signInDiv").hidden = true;
    document.getElementById("login_form").hidden = true;

    localStorage.setItem('token', JSON.stringify(userObject));
    localStorage.setItem('tokenCode', response.credential);
    location.href = '/Hello';
  }

  // выход из аккаунта
  function handleSignOut() {
    setUser({});
    document.getElementById("signInDiv").hidden = false;
    document.getElementById("login_form").hidden = false;
  }

  // токен к апишке
  useEffect(() => {
    google.accounts.id.initialize({
      client_id:
        "6596912059-ovhg97h16hb7ffui8f75sm1au73bpkf1.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    // кнопка логина из апишки гугла
    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "medium",
    });
  }, []);


  return (
    <div className={`wrapper`+theme}>
      <form action="/Hello" method="post" className="form" id='login_form'>
        <label htmlFor="email">{langs.email}</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="blabla@gmail.com"
          required
          minLength="10"
          pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
        />
        <label htmlFor="name">{langs.password}</label>
        <input
          type="password"
          id="password"
          name="password"
          required
          minLength="8"
          pattern="[a-z0-9]{1,15}"
        />
        <button type="submit">{langs.button}</button>
      </form>
      <br></br>
      {/* залогиненый юзер */}
      <div id="signInDiv"></div>
{/*       {user && (
        <div>
          <img src={user.picture}></img>
          <h3>{user.name}</h3>
        </div>
      )} */}

      {/* скрытие кнопки, когда пользователь залогинен */}
{/*       {Object.keys(user).length != 0 && (
        <button onClick={(e) => handleSignOut(e)}>{langs.signOut}</button>
      )} */}

      {/* поключение апишки */}
      <script src="https://accounts.google.com/gsi/client" async defer></script>
    </div>
  );
};

export default Form;
