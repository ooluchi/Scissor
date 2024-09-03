import React from 'react';


const Header: React.FC = () => (
  <header className="container">
    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Scissor</div>
    <div>
      <button className="btn">Login</button>
      <button className="btn ml-4">Register Now</button>
    </div>
  </header>
);

export default Header;
