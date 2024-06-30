import NavBar from "../components/Navbar";
import "../styles/Profile.scss";

function Profil() {
  return (
    <div>
      <NavBar />
      <div className="containerProfil">
        <div className="asidebar">
          <img src="" />
        </div>
        <div className="profil">
          <p className="phProfil">MON COMPTE</p>
          <button type="submit" className="btn_Profile">
            Nom
          </button>
          <button type="submit" className="btn_Profile">
            Prenom
          </button>
          <button type="submit" className="btn_Profile">
            Adress
          </button>
          <button type="submit" className="btn_Profile">
            Pays
          </button>
          <button type="submit" className="btn_Profile">
            Email
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profil;
