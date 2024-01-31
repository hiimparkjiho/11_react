import React from 'react';

function DarkmodeBtn({ onToggleDarkMode, darkMode }) {
  return (
    <button onClick={onToggleDarkMode}>
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}

export default DarkmodeBtn;