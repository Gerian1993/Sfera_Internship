const Special_menu = (props) => {


  const langs = props.langs;
  const lang = props.lang;
  const theme = props.theme;



  console.log(theme);



  const toggleTheme = (theme) => {
    if (theme === "light") {
      props.setTheme("dark");
      console.log(theme);
    } else {
      props.setTheme("light");
      console.log(theme);
    }
  };


  const toggleLang = (key) => {
    props.setLang(key);
    console.log(key);
  };



  return (
    <div className="wrapperSubMenu">
      <h1 className='h1'>{langs[lang].h1}</h1>
      <div className={'div' + theme}>
        <ul className='ul'>
          {langs[lang].li.map((item, id) => {
            return (
              <li
              onClick={() => toggleLang(item.key)}
              className={'li'}
              key={id}
            >
              {item.label}
            </li>
            )
          })}
        </ul>
        <img
          src={theme+'.png'}
          className={'subMenuImg'}
          onClick={()=>{toggleTheme(theme)}}
        />
      </div>
    </div>
  );
};

export default Special_menu;
