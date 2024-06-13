import React from "react";
import styles from "./management.module.css";
import Trash from "../../img/trash.svg?react";
import Pencil from "../../img/pencil-square.svg?react";

const SalesTable = ({ products, handleEdit, handleDelete }) => (
  <table className={styles.productTable}>
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
          <td data-label="Cliente">{product.clientName}</td>
          <td data-label="Produto">{product.productName}</td>
          <td data-label="Valor">R$ {product.productPrice}</td>
          <td data-label="Ações">
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
);

export default SalesTable;
