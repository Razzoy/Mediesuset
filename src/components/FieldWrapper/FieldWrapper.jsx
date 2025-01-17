import style from "./FieldWrapper.module.scss";

export function FieldWrapper({ children, icon }) {
  return (
    <div className={style.wrapperStyling}>
      <span className={style.icon}>{icon}</span>
      {children}
    </div>
  );
}
