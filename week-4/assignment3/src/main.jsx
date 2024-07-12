import { createRoot } from "react-dom/client";
import { StrictMode, useState } from "react";

const Items = ["Item1", "Item2", "Item3", "Item4"];

const Menu = ({ menuOpen, toggleMenu }) => {
  const contents = Items.map((item) => (
    <li key={item}>
      <a href="#">{item}</a>
    </li>
  ));

  return (
    <>
      <div className="menu">
        <ul>
          {contents}
          <li
            className={`hamburger ${menuOpen ? "hamburgerOpen" : ""}`}
            onClick={toggleMenu}
          >
            <div>
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

const SideMenu = ({ menuOpen }) => {
  const contents = Items.map((item) => (
    <li key={item}>
      <a href="#">{item}</a>
    </li>
  ));
  return (
    <div className={`sideMenu ${menuOpen ? "sideMenuOpen" : ""}`}>
      {contents}
    </div>
  );
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(0);

  const toggleMenu = () => {
    setMenuOpen(menuOpen ? 0 : 1);
  };

  return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      <Menu menuOpen={menuOpen} toggleMenu={toggleMenu} />
      <SideMenu menuOpen={menuOpen} />
    </nav>
  );
};

const Hero = () => {
  const [heroMessage, setHeroMessage] = useState("Welcome Message");
  const changeMessage = () => {
    if (heroMessage === "Welcome Message"){
      setHeroMessage("Have a Good Time!");
    }
    else{
      setHeroMessage("Welcome Message");
    }
  };
  return (
    <div className="hero">
      <h1 id="heroMessage" onClick={changeMessage}>
        {heroMessage}
      </h1>
    </div>
  );
};

const Content = () => {
  const boxItems = [
    "content Box 1",
    "content Box 2",
    "content Box 3",
    "content Box 4",
  ];
  const boxContents = boxItems.map((item) => (
    <div className="box-item" key={item}>
      {item}
    </div>
  ));
  
  const [isShow, setIsShow] = useState(false);
  const showMore = () => setIsShow(!isShow);

  return (
    <div className="content">
      <h2>Section Title</h2>
      <div className="box-content">{boxContents}</div>
      <button onClick={showMore}>Call to Action</button>
      <div className={isShow ?"box-content":"hidden-content" }>{boxContents}</div>
    </div>
  );
};

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Content />
    </>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>);
    
