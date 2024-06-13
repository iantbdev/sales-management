import React, { useState, useEffect } from "react";
import styles from "./management.module.css";

const SalesForm = React.forwardRef(
  ({ isEditing, editProduct, handleSubmit }, ref) => {
    const [clientName, setClientName] = useState("");
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");

    const onSubmit = (event) => {
      event.preventDefault();
      handleSubmit(clientName, productName, productPrice);
      setClientName("");
      setProductName("");
      setProductPrice("");
    };

    useEffect(() => {
      if (isEditing && editProduct) {
        setClientName(editProduct.clientName);
        setProductName(editProduct.productName);
        setProductPrice(editProduct.productPrice);
      }
    }, [isEditing, editProduct]);

    return (
      <form ref={ref} className={styles.formProduto} onSubmit={onSubmit}>
        <input
          type="text"
          className={styles.inputProduto}
          name="Name"
          placeholder="Nome do Cliente"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
          required
        />
        <input
          type="text"
          name="produto"
          className={styles.inputProduto}
          placeholder="Nome do Produto"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />
        <input
          type="number"
          name="valor"
          step={0.01}
          className={styles.inputProduto}
          placeholder="Valor do Produto"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          min={0}
          required
        />
        <button className={styles.botaoProduto} type="submit">
          {isEditing ? "Atualizar" : "Adicionar"}
        </button>
      </form>
    );
  }
);

export default SalesForm;
