import style from "./LineUpCard.module.scss";

export function LineUpCard({ img, alt, title, date, stageColor }) {
  return (
    <div className={style.cardStyling} style={{ backgroundColor: stageColor }}>
      <img src={img} alt={alt} />
      <div className={style.textContainer}>
        <h2>{title}</h2>
        <p>{date}</p>
      </div>
    </div>
  );
}
