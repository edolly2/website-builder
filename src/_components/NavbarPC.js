import { MdClose } from "react-icons/md";
const NavbarPC = (props) => {
  return (
    <div className="navbarPC-container" style={props.style}>
      <div className="main-menu-close-container">
        <MdClose
          className="icons main-menu-close-icon"
          onClick={props.menuClose}
          style={props.menuCloseStyle}
        />
      </div>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>My Work</li>
          <li>Pricing</li>
          <li>Account</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default NavbarPC;
