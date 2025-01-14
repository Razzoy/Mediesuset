import { NavLink } from "react-router-dom";
import style from "./NewsCard.module.scss";

export function NewsCard({ img, alt, title, content, link }) {
  return (
    <div className={style.cardStyling}>
      <img src={img} alt={alt} />
      <article>
        <h2>{title}</h2>
        <p>{content}</p>
        <NavLink to={link}>Læs Mere</NavLink>
      </article>
    </div>
  );
}
