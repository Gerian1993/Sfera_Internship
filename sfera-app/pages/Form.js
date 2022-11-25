

const Form = (props) => {
  const langs = props;

  return (
    <div className='wrapperlight'>
      <form action="/send-data-here" method="post" className="form">
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
    </div>
  );
};

export default Form;
