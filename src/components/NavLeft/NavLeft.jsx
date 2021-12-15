import { Link, useLocation } from "react-router-dom";
import "./navleft.scss";

const NavLeft = () => {
  const location = useLocation();
  const path = location.pathname;

  console.log(path);
  return (
    <div className="leftWrapper">
      <Link
        className={`link ${path === "/projects" ? "active" : ""}`}
        to="/projects"
      >
        Projects
      </Link>
      <Link
        className={`link ${path === "/skills" ? "active" : ""}`}
        to="/skills"
      >
        Skills
      </Link>
    </div>
  );
};

export default NavLeft;
