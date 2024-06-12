import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  useNavigate,
} from "react-router-dom";
import { userList } from "../../Data";

// import { ReactComponent as Icon } from "/img/icon.svg";

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // alert("Enviando seus dados: " + email + " - " + password);

    // fetch("https://react-7aa89-default-rtdb.firebaseio.com/users.json", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ email, password }),
    // }).then((data) => data.json());

    // .then((json) => console.log(json));

    const user = userList.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      navigate("/landingPage");
    } else {
      alert("Email ou senha incorrentos");
    }
  };

  return (
    <div className="login">
      <img src="./src/img/icon.svg" alt="Icon do Site" />
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          name="password"
          value={password}
          minLength={7}
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default login;
