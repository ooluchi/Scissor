const Header: React.FC = () => (
    <header className="flex justify-between items-center p-4">
      <div className="text-3xl font-bold text-purple-500">Linkly</div>
      <div>
        <button className="btn">Login</button>
        <button className="btn ml-4">Register Now</button>
      </div>
    </header>
  );

export default Header;