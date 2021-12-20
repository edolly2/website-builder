import { CgMenuGridR } from "react-icons/cg";
import SiteLogo from "../_assets/website-builder-logo2.png";

const Header = (props) => {
  return (
    <header>
      <div className="site-brand-container">
        <img src={SiteLogo} alt="#" />
      </div>
      <div className="main-menu-container">
        <div className="main-menu-icon-container">
          <CgMenuGridR className="icons" onClick={props.mainMenuClick} />
        </div>
      </div>
    </header>
  );
};

export default Header;
