import React from "react";
import styles from "./landingPage.module.css";
import { useNavigate } from "react-router-dom";

// import { ReactComponent as Banner } from "/src/img/Sample.svg";

const landingPage = () => {
  //   window.addEventListener("scroll", console.log("scroll usado"));
  //   const [scrollPosition, setScrollPosition] = useState(0);

  //   const handleScroll = (e) => {
  //     const { scrollTop, scrollHeight, clientHeight } = e.target;
  //     const position = Math.ceil(
  //       (scrollTop / (scrollHeight - clientHeight)) * 100
  //     );
  //     setScrollPosition(position);
  //   };

  const navigate = useNavigate();

  return (
    <section className={styles.container}>
      <div>
        <h1>Bem vindo ao Gerenciador de Vendas, usuário!</h1>
        <h2>Consulte, adicione, edite e exclua suas vendas.</h2>
        <h1></h1>
        {/* <button>Logout</button> */}
        <button onClick={() => navigate("/management")}>Gerenciar</button>
        <span>ou</span>
        <button>Logout</button>
      </div>
      <div className={styles.banner}>
        <img src="./src/img/Sample.svg" alt="Banner do Site" />
        {/* <Banner /> */}
      </div>
    </section>
  );
};

export default landingPage;
