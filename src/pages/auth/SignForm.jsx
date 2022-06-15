import axios from "axios";
import { useState } from "react";
import { Input } from "../../components/form/FormComponents";

export default function SignForm({ isSignUp }) {
  const [formInput, setFormInput] = useState({});

  const handleInput = (e) => {
    const infoInput = e.currentTarget;
    formInput[infoInput.name] = infoInput.value;
    setFormInput({ ...formInput });
  };

  const validateFormInput = () => {
    const formErrors = [];
    if (!formInput.email) formErrors.push("Email is required");
    if (!formInput.password) formErrors.push("Password is required");
    if (!formInput.username && isSignUp) formErrors.push("username is required");
    if (!formInput.pictureUrl && isSignUp) formErrors.push("pictureUrl is required");

    const formIsValid = formErrors.length === 0;
    if (!formIsValid) alertFormErrors(formErrors);
    return formIsValid;
  };

  const alertFormErrors = (formErrors) => {
    window.alert(formErrors.map((error) => `${error}`));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateFormInput()) {
      axios
        .post(`http://localhost:5000/${isSignUp ? "sign-up" : "sign-in"}`, formInput)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
  };

  return (
    <main>
      <h1>linkr</h1>
      <h4>save, share and discover the best links on the web</h4>
      <form>
        <Input
          type="text"
          placeholder="email"
          onChange={handleInput}
          name="email"
          required={true}
        />
        <Input
          type="text"
          placeholder="password"
          onChange={handleInput}
          name="password"
          required={true}
        />
        {isSignUp && (
          <>
            <Input
              type="text"
              placeholder="username"
              onChange={handleInput}
              name="username"
              required={true}
            />
            <Input
              type="text"
              placeholder="pictureUrl"
              onChange={handleInput}
              name="pictureUrl"
              required={true}
            />
          </>
        )}
      </form>
      <button onClick={handleSubmit}>Submit</button>
    </main>
  );
}
