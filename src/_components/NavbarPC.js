const NavbarPC = (props) => {
  return (
    <div className="navbarPC-container" style={props.navbarPCStyle}>
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
