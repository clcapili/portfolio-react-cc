import { NavLink } from "react-router-dom";

export default function Header() {

  let activeClassName = "active";

  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="about"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="projects"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="contact"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}