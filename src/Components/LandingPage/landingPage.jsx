import React from "react";
import styles from "./landingPage.module.css";
import { useNavigate } from "react-router-dom";
import { logout } from "../../store/reducers/userReducer";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../../img/Sample.svg?react";

const landingPage = () => {
  const user = useSelector((state) => state.users.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Log-out do usuário
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <section className={styles.container}>
      <div>
        <h1>Bem vindo ao Gerenciador de Vendas, {user.name}!</h1>
        <h2>Consulte, adicione, edite e exclua suas vendas.</h2>
        <h1></h1>
        <button onClick={() => navigate("/management")}>Gerenciar</button>
        <span>ou</span>
        <button onClick={() => handleLogout()}>Logout</button>
      </div>
      <div className={styles.banner}>
        <Banner className={styles.svg} />
      </div>
    </section>
  );
};

export default landingPage;
