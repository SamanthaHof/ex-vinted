import { Link } from "react-router-dom";
import logo from "../assets/img/logo.jpg";

const Header = ({ token, search, handleToken, setSearch }) => {
  // console.log(token);
  return (
    <div className="container">
      <header>
        {/* Si token existe, c'est que je suis connecté, j'affiche le bouton déconnexion, sinon j'affiche les 2 autres boutons */}
        {token ? (
          <button
            onClick={() => {
              // Je me déconnecte en appelant la fonction handleToken et en lui donnant null en argument
              handleToken(null);
            }}
          >
            Se déconnecter
          </button>
        ) : (
          <>
            <div className="slideicon">
              <Link to="/">
                <img src={logo} alt="logo vinted" />
              </Link>
            </div>
          </>
        )}
        <input
          placeholder="Rechercher des articles"
          type="text"
          name="search"
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
        <div className="btn">
          <Link to="/signup">
            <button>S'inscrire</button>
          </Link>
          <Link to="/login">
            <button>Se connecter</button>
          </Link>
        </div>

        {/* <input type="text"  /> */}
        <Link to={token ? "/publish" : "./login"}>
          <button>Vend tes article</button>
        </Link>
      </header>
    </div>
  );
};

export default Header;
