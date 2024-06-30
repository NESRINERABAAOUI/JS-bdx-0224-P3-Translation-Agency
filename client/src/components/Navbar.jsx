import "../styles/NavBar.scss";
// eslint-disable-next-line import/no-unresolved, import/newline-after-import
function NavBar() {
  return (
    <nav>
      <img className="logo" src="#" alt="logo" />
      <div className="btn_navbar">
        <input className="btn_nav" type="button" value="ACCUEIL" />
        <input className="btn_nav" type="button" value="NOS SERVICES" />
        <input className="btn_nav" type="button" value="CONTACT" />
        <input className="btn_nav btn_login" type="button" value="LOGIN" />
      </div>
    </nav>
  );
}

export default NavBar;
