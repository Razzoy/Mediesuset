import { FiMail } from "react-icons/fi";
import { InputField } from "../InputField/InputField";
import style from "./Newsletter.module.scss";
import { useState } from "react";

export function Newsletter({action}) {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  function handleEmailChange(value){
    setEmail(value);
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    setIsValid(emailRegex.test(value));
    
  }

  function handleSubmit() {
    if(isValid) {
      setMessage("Tilmelding succesfuld! Tak for at tilmelde dig.");
    }else {
      setMessage("Indtast venligst en gyldig e-mailadresse.");
    }

    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 5000);
  } 
  


  return (
    <div className={style.newsStyling}>
      <h2>TIMLED NYHEDSBREV</h2>
      <p>Få de seneste nyheder sendt til din indbakke</p>
      <div className={style.subscribeStyling}>
        <div>
          <FiMail />
        </div>
        <InputField
          type="email"
          placeholder="Indtast emailadresse"
          name="email"
          id="email"
          labelText=''
          invalid={!isValid && email ? 'invalid' : ''}
          action={handleEmailChange}
        />
        <button className={isValid ? style.newsButton : style.disabled} onClick={handleSubmit}>TILMELD</button>
      </div>
      {showMessage && <p className={style.message} >{message}</p>}
    </div>
  );
}
