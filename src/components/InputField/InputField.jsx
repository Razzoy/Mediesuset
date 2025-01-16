import style from "./InputField.module.scss";

export const InputField = ({
  type,
  placeholder,
  action,
  custom,
  id,
  name,
  invalid,
  labelText
}) => {
  const onInputChange = (e) => {
    action(e.target.value);
  };

  return (
    <>
    {name && <label htmlFor={name}>{labelText}</label>}
    <input
      className={`${style.inputStyling} ${style[custom]} ${style[invalid]}`}
      onChange={(event) => onInputChange(event)}
      id={id}
      type={type}
      placeholder={placeholder}
      name={name}
    />
    </>
  );
};
