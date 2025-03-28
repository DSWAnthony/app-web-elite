import React from "react";
import { Image } from "antd";

const ProductList = ({ inventario, onEdit, onDelete }) => {
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
            <th scope="col" style={{ width: "150px" }}>ACCIONES</th>
          </tr>
        </thead>
        <tbody>
          {inventario.length > 0 ? (
            inventario.map((item) => (
              <tr key={item.sku}>
                <th scope="row">{item .sku}</th>
                <td>
                    <Image
                      src={item.imagen}
                      width={90}
                    />
                </td>
                <td>{item.modelo}</td>
                <td>{item.color}</td>
                <td>{item.talla}</td>
                <td>{item.marca}</td>
                <td>{item.stock}</td>
                <td>{item.almacen}</td>
                <td style={{ textAlign: "center" }}>
                <button
                  className="btn btn-warning btn-sm me-2"
                  data-bs-toggle="modal"
                  data-bs-target="#modal"
                  onClick={() => onEdit(item)}
                >
                  Editar
                </button>
                  <button className="btn btn-danger btn-sm"
                  data-bs-toggle="modal"
                  data-bs-target="#modal"
                   onClick={() => onDelete(item)}>
                    <i className="bi bi-trash-fill"></i> Eliminar
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9" style={{ textAlign: "center" }}>
                No hay productos en inventario
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
