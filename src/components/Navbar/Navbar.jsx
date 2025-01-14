import { NavLink } from "react-router-dom";
import style from "./Navbar.module.scss";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export function Navbar() {
  let [isHidden, setIsHidden] = useState(true);

  return (
    <>
      <nav className={style.navbarStyling}>
        <ul>
          <li>
            <NavLink to="/">FORSIDE</NavLink>
          </li>
          <div>
            <p>EVENTS</p>
            <div className={isHidden ? style.dropDown : style.active}>
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
