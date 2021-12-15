import { useLocation, Link } from "react-router-dom";
import "./navright.scss";

const NavRight = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="rightWrapper">
      <Link className={`link ${path === "/about" ? "active" : ""}`} to="/about">
        About
      </Link>
      <Link
        className={`link ${path === "/contact" ? "active" : ""}`}
        to="/contact"
      >
        Contact
      </Link>
    </div>
  );
};

export default NavRight;
