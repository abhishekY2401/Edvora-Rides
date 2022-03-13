import "./navbar.css";
import { ReactComponent as Photo } from "../assets/photo.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <h2 id="logo">Edvora</h2>
      <nav>
        <h5 id="user">Dhruv Singh</h5>
        <div>
          <Photo />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
