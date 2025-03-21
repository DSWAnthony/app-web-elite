import React from "react";

const ProductList = ({ products, onEdit, onDelete }) => {
  return (
    <div className="table-responsive">
      <table className="table table-hover table-bordered shadow-sm">
        <thead className="table-dark">
          <tr>
            <th scope="col">SKU</th>
            <th scope="col">IMAGEN</th>
            <th scope="col">MODELO</th>
            <th scope="col">COLOR</th>
            <th scope="col">TALLA</th>
            <th scope="col">MARCA</th>
            <th scope="col">STOCK</th>
            <th scope="col">ALMACEN</th>
            <th scope="col" style={{ width: "150px" }}>
              ACCIONES
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <th scope="row">{product.id}</th>
              <td><img src="https://imgs.search.brave.com/_toqT8IRn1TgcZsWaLmUIyGozfTFh2vCNwcyEiZ3NAU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzExdjJwUFZIS0wu/anBn" width={90} /></td>
              <td>{product.last}</td>
              <td>{product.handle}</td>
              <td>{product.handle}</td>
              <td>{product.handle}</td>
              <td>{product.handle}</td>
              <td>{product.handle}</td>
              <td style={{ textAlign: "center" }}>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => onEdit(product)}
                  data-bs-toggle="modal"
                  data-bs-target="#modal"
                >
                  <i className="bi bi-pencil-fill"></i> Editar
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => onDelete(product)}
                  data-bs-toggle="modal"
                  data-bs-target="#modal"
                >
                  <i className="bi bi-trash-fill"></i> Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
