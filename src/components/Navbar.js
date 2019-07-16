import React, { useState } from 'react';

//import useDarkMode from '../hooks/useDarkMode';

const Navbar = (props) => {
  /*
  const [darkMode, setDarkMode] = useState(false);
  const [darkMode, setDarkMode] = useDarkMode('darkMode', false)
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  */
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={props.toggleMode}
          className={props.darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
