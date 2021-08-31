import React from "react";

const Header = () => {
  const date = new Date().toDateString();
  return (
    <header className="header container-fluid">
      <div className="limited">
        <h1>Today's Weather</h1>
        <div>
          <p id="date">{date}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
