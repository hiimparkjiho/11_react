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
        <button onClick={onToggleDarkMode}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      </div>
      
    );
  }

  export default Header;