function Header() {
  return (
    <div className="header">
      <div className="header-wrapper">
        <img
          className="logo-img"
          src="./assets/img/logo/SVG_logo.svg.png"
          alt="Logo"
        />

        <div className="nav-menu-wrapper">
          <div className="nav">
            <div className="nav-link">
              <a href="./Home.html">Home</a>
            </div>

            <div className="nav-link">
              <a href="./About.html">About</a>
              <div className="subnav">
                <div className="subnav-link">
                  <a href="./About.html">About 1</a>
                </div>

                <div className="subnav-link">
                  <a href="./About.html">About 2</a>
                </div>

                <div className="subnav-link">
                  <a href="./About.html">About 3</a>
                </div>
              </div>
            </div>

            <div className="nav-link">
              <a href="./List.html">List</a>
              <div className="subnav">
                <div className="subnav-link">
                  <a href="./List.html">Iphone</a>
                </div>

                <div className="subnav-link">
                  <a href="./List.html">PC</a>
                </div>

                <div className="subnav-link">
                  <a href="./List.html">Laptop</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
