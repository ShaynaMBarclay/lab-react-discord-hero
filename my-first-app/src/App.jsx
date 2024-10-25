import './App.css';
import discordBackground from './assets/discord-background.png';
import discordLogo from './assets/discord-logo-white.png';
import menuIcon from './assets/menu-icon.png';

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="header">
        <img src={discordLogo} alt="Discord Logo" className="logo" />
        <img src={menuIcon} alt="Menu Icon" className="menu-icon" />
      </header>
        {/* Text overlay */}
        <div className="overlay">
          <h1>IMAGINE A PLACE...</h1>
          <p>
            ...where you can belong to a school club, a gaming group, or a worldwide art community.<br/>
            Where just you and a handful of friends can spend time together. <br/>
            A place that makes it <br/>
            easy to talk every day and hang out more often. <br/>
          </p>
          <div className="buttons">
            <button className="download-btn">Download for Mac</button>
            <button className="open-btn">Open Discord in your browser</button>

            {/* Background Image */}
          <div className="content">
          <img src={discordBackground} alt="Discord Background" className="background-image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
