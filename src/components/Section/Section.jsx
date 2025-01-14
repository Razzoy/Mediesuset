import style from './Section.module.scss'

export function Section({children, title}) {

  return (
    <div className={style.sectionStyling}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}