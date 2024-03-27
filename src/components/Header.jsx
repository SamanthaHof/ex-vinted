const Header = () => {
  return (
    <header>
      <div>
        <img className="logo" src={Logo} />
        <button> S'inscrire</button>
        <button>Se connecter</button>
        <button> Vends tes articles</button>
      </div>
    </header>
  );
};

export default Header;
