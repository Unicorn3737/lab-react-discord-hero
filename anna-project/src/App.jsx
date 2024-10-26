import "./App.css";
import backGround from "./assets/discord-background.png";
import logoDiscord from "./assets/discord-logo-white.png";
import menuIcon from "./assets/menu-icon.png";

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={logoDiscord} alt="Discord Logo" className="logo" />
        <img src={menuIcon} alt="Menu Icon" className="menu-icon" />
      </header>
      <div className="Header">
        <h1>IMAGINE A PLACE...</h1>

        <p>
          ...where you can belong to a school club, a gaming group, or a
          worldwide art community. Where just you and a handful of friends can
          spend time together. A place that makes it easy to talk every day and
          hang out more often.
        </p>

        <div className="buttons">
          <button className="btn-first">Downoload for Mac</button>
          <button className="btn-open">Open Discord in your browser</button>
          <img
            src={backGround}
            alt="Discord background"
            className="discord-background"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
