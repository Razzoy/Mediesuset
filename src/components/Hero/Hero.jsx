import style from "./Hero.module.scss";

export function Hero({ imgSrc, imgPosition, alt }) {
  const inlineStyle = {
    objectPosition: imgPosition,
  };

  const baseUrl = "https://api.mediehuset.net/images/mediesuset";
  return (
    <div className={style.heroStyling}>
      <img src={`${baseUrl}/${imgSrc}`} alt={alt} style={inlineStyle} />
    </div>
  );
}
