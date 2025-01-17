import { Hero } from "../components/Hero/Hero";
import { MdLock } from "react-icons/md";
import { IoAt } from "react-icons/io5";
import { InputField } from "../components/InputField/InputField";
import { Section } from "../components/Section/Section";
import { useContext, useState } from "react";
import { UserContext } from "../context/userContext";
import { FieldWrapper } from "../components/FieldWrapper/FieldWrapper";

export function LoginPage() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const [loginMessage, setLoginMessage] = useState();

  const { setUserData } = useContext(UserContext);

  function submitData() {
    //Sådan her opretter man en body med en key value pairs
    const body = new URLSearchParams();
    body.append(`username`, email);
    body.append("password", password);

    // Opret et options object med HTTP request metode "POST" og vores body
    const options = {
      method: "POST",
      body: body,
    };

    // Fetch (med options - POST til server)
    fetch("https://api.mediehuset.net/token", options)
      .then((res) => res.json())
      .then((data) => {
        if (data.access_token) {
          setUserData(data);
          setLoginMessage(
            `Du er nu logget ind.. Velkommen tilbage ${data.user.firstname}`
          );
        } else {
          setLoginMessage("Du har tastet forkert password eller email");
        }
      })
      .catch((err) => setError(err));
  }

  return (
    <div>
      <Hero
        imgSrc={"camp2-foto-colourbox.jpg"}
        imgPosition={"100% 30%"}
        alt={"crowd"}
      />
      <Section title={"LOGIN"}>
        <h2>Indtast login oplysninger:</h2>
        <h3>{loginMessage}</h3>
        <form>
          <FieldWrapper icon={<IoAt/>}>
            <InputField
              type="email"
              placeholder="Indtast din email"
              name="email"
              id="email"
              labelText=""
              invalid=""
              action={setEmail}
            />
          </FieldWrapper>

          <FieldWrapper icon={<MdLock/>}>
            <InputField
              type="password"
              placeholder="Indtast adgangskode"
              name="password"
              id="password"
              labelText=""
              invalid=""
              action={setPassword}
            />
          </FieldWrapper>
        </form>
        <button onClick={() => submitData()}>LOGIN</button>
      </Section>
    </div>
  );
}
