import React from "react";

const ProductList = ({ products, onEdit, onDelete }) => {
  return (
    <div className="table-responsive">
      <table className="table table-hover table-bordered shadow-sm">
        <thead className="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
            <th scope="col" style={{ width: "150px" }}>
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <th scope="row">{product.id}</th>
              <td>{product.first}</td>
              <td>{product.last}</td>
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
