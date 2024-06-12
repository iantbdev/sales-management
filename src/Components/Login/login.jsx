import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userList } from "../../Data";
import { useDispatch } from "react-redux";
import { login } from "../../store/reducers/userReducer";
import Icon from "../../img/icon.svg?react";
import styles from "./login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const navigate = useNavigate();

  // Log-in do usuário
  const handleSubmit = (event) => {
    event.preventDefault();
    const user = userList.find(
      (user) => user.email === email && user.password === password
    );

    // Verifica se o user existe
    if (user) {
      dispatch(login(user));
      navigate("/landingPage");
    } else {
      alert("Email ou senha incorrentos");
    }
  };

  return (
    <div className={styles.login}>
      <Icon className={styles.icon} />
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

export default Login;
