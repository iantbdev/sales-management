import React, { useState, useRef } from "react";
import styles from "./management.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  deleteProduct,
  updateProduct,
} from "../../store/reducers/productReducer";
import Alert from "@mui/material/Alert";
import SalesForm from "./salesForm";
import SalesTable from "./salesTable";

const Management = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);
  const [editProduct, setEditProduct] = useState(null);
  const [showAlert, setShowAlert] = useState(false); // Para mostrar o alerta de que a ação funcionou
  const [alertText, setAlertText] = useState(""); // Para definir o texto do alerta de que a ação funcionou

  const formRef = useRef(null);
  const newID = products.length ? products[products.length - 1].id + 1 : 1;

  // Função para exibir o alerta com texto personalizado
  const showCustomAlert = (text) => {
    setAlertText(text);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  // Função para adiconar vendas
  const handleSubmit = (clientName, productName, productPrice) => {
    // Verifica se o formulário está no modo de edição
    if (!isEditing) {
      dispatch(
        addProduct({ id: newID, clientName, productName, productPrice })
      );
      showCustomAlert("Venda adicionada com sucesso :)");
    } else {
      dispatch(
        updateProduct({
          id: editProduct.id,
          clientName,
          productName,
          productPrice,
        })
      );
      setIsEditing(false);
      setEditProduct(null);
      showCustomAlert("Venda atualizada com sucesso :)");
    }

    // Reseta o formulário após o envio
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  // Função para editar a venda
  const handleEdit = (product) => {
    setIsEditing(true);
    setEditProduct(product);
  };

  // Função para deletar a venda
  const handleDelete = (id) => {
    dispatch(deleteProduct({ id }));
    showCustomAlert("Venda deletada com sucesso  >:)");
  };

  return (
    <div className={styles.gerenciaVendas}>
      <div className={styles.confirmaAcao}>
        {showAlert && <Alert severity="success">{alertText}</Alert>}
      </div>

      <h1 className={styles.titulo}>Vendas</h1>
      <SalesForm
        ref={formRef}
        isEditing={isEditing}
        editProduct={editProduct}
        handleSubmit={handleSubmit}
      />
      <SalesTable
        products={products}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Management;
