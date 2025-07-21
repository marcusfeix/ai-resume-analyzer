
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="flex flex-row gap-4">
        <Link to="/" className="navbar-brand">
          <h3 className="text-2xl font-bold text-gradient">Resumind</h3>
        </Link>
      </div>
      <div className="flex flex-row gap-4 items-center">
        <Link to="/auth" className="primary-button text-center">
          Upload resume
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;