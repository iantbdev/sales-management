import React, { useState, useRef } from "react";
import styles from "./management.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  deleteProduct,
  updateProduct,
} from "../../store/reducers/productReducer";
import Trash from "../../img/trash.svg?react";
import Pencil from "../../img/pencil-square.svg?react";
import Alert from "@mui/material/Alert";

const Management = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const [clientName, setClientName] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editProductID, setEditProductID] = useState("");
  const [showAlert, setShowAlert] = useState(false); // Para mostrar o alerta de que a ação funcionou
  const [alertText, setAlertText] = useState(""); // Para definir o alerta de que a ação funcionou

  const formRef = useRef(null); // Referência para o formulário
  const newID = products.length ? products[products.length - 1].id + 1 : 1;

  // Função para exibir o alerta com texto personalizado
  const showCustomAlert = (text) => {
    setAlertText(text);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  // Função para adiconar produtos
  const handleSubmit = (event) => {
    event.preventDefault();

    // Verifica se o formulário está no modo de edição
    if (!isEditing) {
      dispatch(
        addProduct({
          id: newID,
          clientName,
          productName,
          productPrice,
        })
      );
      showCustomAlert("Venda adicionada com sucesso :)");
    } else {
      dispatch(
        updateProduct({
          id: editProductID,
          clientName,
          productName,
          productPrice,
        })
      );
      setIsEditing(false);
      setEditProductID("");
      showCustomAlert("Venda atualizada com sucesso :)");
    }

    // Reseta o formulário após o envio
    if (formRef.current) {
      formRef.current.reset();
    }

    setClientName("");
    setProductName("");
    setProductPrice("");
  };

  // Função para editar o produto
  const handleEdit = (product) => {
    setIsEditing(true);
    setEditProductID(product.id);
    setClientName(product.clientName);
    setProductName(product.productName);
    setProductPrice(product.productPrice);
  };

  // Função para deletar o produto
  const handleDelete = (id, text) => {
    dispatch(deleteProduct({ id }));
    showCustomAlert("Venda deletada com sucesso  >:)");
  };

  return (
    <div className={styles.gerenciaVendas}>
      <div className={styles.confirmaAcao}>
        {showAlert && <Alert severity="success">{alertText}</Alert>}
      </div>

      <h1 className={styles.titulo}>Vendas</h1>
      <h2>
        {isEditing ? "Atualize Venda" : "Add Venda"}{" "}
        <span>(nome do cliente, produto, valor)</span>
      </h2>

      {/* Formulário para adição de produtos */}
      <form
        ref={formRef}
        className={styles.formProduto}
        onSubmit={handleSubmit}
      >
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

      {/* Tabelas com os produtos */}
      <table>
        <thead>
          <tr>
            <th>Cliente</th>
            <th>Produto</th>
            <th>Valor</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td data-label="Cliente"> {product.clientName} </td>
              <td data-label="Produto"> {product.productName} </td>
              <td data-label="Valor"> R$ {product.productPrice} </td>
              <td data-label="Ações">
                {" "}
                <button
                  onClick={() => handleEdit(product)}
                  className={styles.botaoEditar}
                >
                  <Pencil /> Editar
                </button>
                <button
                  onClick={() => handleDelete(product.id)}
                  className={styles.botaoExcluir}
                >
                  <Trash /> Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Management;
