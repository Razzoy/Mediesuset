import { NavLink } from "react-router-dom";
import style from "./Navbar.module.scss";
import { FaSearch } from "react-icons/fa";

export function Navbar() {

  return (
    <>
      <nav className={style.navbarStyling}>
        <ul>
          <li>
            <NavLink to="/">FORSIDE</NavLink>
          </li>
          <div className={style.events}>
            <p>EVENTS</p>
            <div className={style.dropDown}>
              <li>
                <NavLink to="lineup">LINE-UP</NavLink>
              </li>
              <li>
                <NavLink to="program">PROGRAM</NavLink>
              </li>
            </div>
          </div>
          <li>
            <NavLink to="camps">CAMPS</NavLink>
          </li>
          <li>
            <NavLink to="tickets">BILLETTER</NavLink>
          </li>
          <li>
            <NavLink to="info">PRAKTISK INFO</NavLink>
          </li>
          <li>
            <NavLink to="login">LOGIN</NavLink>
          </li>
          <FaSearch />
        </ul>
      </nav>
    </>
  );
}
