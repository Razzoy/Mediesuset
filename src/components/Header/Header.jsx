import { Navbar } from "../Navbar/Navbar";
import style from "./Header.module.scss";

export function Header() {
  return (
    <div className={style.HeaderStyling}>
      <div>
        <img src="src/assets/Logo.png" alt="mediesuset" />
      </div>
      <p className={style.date}>4 - 7 juli 2022</p>
      <Navbar />
    </div>
  );
}
