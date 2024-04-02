import { Link } from "react-router-dom";
import banner from "../assets/img/banner.jpg";

const Hero = () => {
  return (
    <section>
      <img src={banner} alt="banner" />
      <div className="frame">
        <h1>Prêts à faire du tri dans vos placards?</h1>
        <Link to="/publish/">
          <span>
            <button>Commencer à Vendre</button>
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
