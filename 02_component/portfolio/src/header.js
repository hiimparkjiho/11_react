import DarkmodeBtn from "./DarkModeBtn";
import "./header.css"


function Header({ darkMode, onToggleDarkMode }) {
    return (
      <div id='headerDiv'>
        <nav>
          <ul>
            <li>Home</li>
            <li>Skills</li>
            <li>Project</li>
            <li>Contact</li>
          </ul>
        </nav>
        <DarkmodeBtn onToggleDarkMode={onToggleDarkMode} darkMode={darkMode} />
      </div>
      
    );
  }

  export default Header;