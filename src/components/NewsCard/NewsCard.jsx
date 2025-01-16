import { NavLink } from "react-router-dom";
import style from "./NewsCard.module.scss";

export function NewsCard({ img, alt, title, content, link }) {
  return (
    <div className={style.cardStyling}>
      <img src={img} alt={alt} />
      <article>
        <div>
          <h3>{title}</h3>
        </div>
        <p>{content}</p>
        <NavLink to={link}>Læs Mere</NavLink>
      </article>
    </div>
  );
}
