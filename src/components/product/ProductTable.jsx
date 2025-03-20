import React, { useState } from "react";

const ProductTable = () => {
  const [products, setProducts] = useState([
    { id: 1, first: "Mark", last: "Otto", handle: "@mdo" },
    { id: 2, first: "Jacob", last: "Thornton", handle: "@fat" },
    { id: 3, first: "Larry", last: "Bird", handle: "@twitter" },
  ]);

  const [modalType, setModalType] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [formData, setFormData] = useState({ id: "", first: "", last: "", handle: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (modalType === "Agregar") {
      setProducts([...products, { ...formData, id: products.length + 1 }]);
    } else {
      setProducts(products.map((p) => (p.id === formData.id ? formData : p)));
    }
    setModalType("");
  };

  const handleDelete = () => {
    setProducts(products.filter((p) => p.id !== selectedProduct.id));
    setModalType("");
  };

  return (
    <div className="container mt-5">
      {/* Título */}
      <h1 className="text-center mb-4" style={{ color: "#2c3e50", fontWeight: "bold" }}>
        Lista de Productos
      </h1>
{/* Botón para agregar producto */}
<div className="text-center mt-4">
        <button
          className="btn btn-primary btn-lg rounded-pill"
          style={{ backgroundColor: "#3498db", border: "none", padding: "10px 20px" }}
          onClick={() => {
            setModalType("Agregar");
            setFormData({ id: "", first: "", last: "", handle: "" });
          }}
          data-bs-toggle="modal"
          data-bs-target="#modal"
        >
          <i className="bi bi-plus-lg"></i> Agregar Producto
        </button>
      </div>
      <p></p>

      {/* Tabla de productos */}
      <div className="table-responsive">
        <table className="table table-hover table-bordered shadow-sm">
          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
              <th scope="col" style={{ width: "150px" }}>Acciones</th> {/* Ancho fijo para la columna */}
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.first}</td>
                <td>{product.last}</td>
                <td>{product.handle}</td>
                <td style={{ textAlign: "center" }}> {/* Centrar el contenido */}
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => {
                      setModalType("Editar");
                      setFormData(product);
                    }}
                    data-bs-toggle="modal"
                    data-bs-target="#modal"
                  >
                    <i className="bi bi-pencil-fill"></i> Editar
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => {
                      setModalType("Eliminar");
                      setSelectedProduct(product);
                    }}
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

      

      {/* MODAL GENERAL */}
      <div className="modal fade" id="modal" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content border-0 shadow-lg">
            <div className="modal-header" style={{ backgroundColor: "#3498db", color: "#fff" }}>
              <h5 className="modal-title">{modalType} Producto</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              {modalType === "Eliminar" ? (
                <p className="lead">
                  ¿Seguro que quieres eliminar a <b>{selectedProduct?.first} {selectedProduct?.last}</b>?
                </p>
              ) : (
                <>
                  <div className="mb-3">
                    <label className="form-label">First</label>
                    <input
                      type="text"
                      className="form-control"
                      name="first"
                      value={formData.first}
                      onChange={handleChange}
                      placeholder="Nombre"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Last</label>
                    <input
                      type="text"
                      className="form-control"
                      name="last"
                      value={formData.last}
                      onChange={handleChange}
                      placeholder="Apellido"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Handle</label>
                    <input
                      type="text"
                      className="form-control"
                      name="handle"
                      value={formData.handle}
                      onChange={handleChange}
                      placeholder="Handle"
                    />
                  </div>
                </>
              )}
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-secondary rounded-pill"
                data-bs-dismiss="modal"
              >
                <i className="bi bi-x-lg"></i> Cancelar
              </button>
              {modalType === "Eliminar" ? (
                <button
                  className="btn btn-danger rounded-pill"
                  onClick={handleDelete}
                  data-bs-dismiss="modal"
                >
                  <i className="bi bi-trash-fill"></i> Sí, eliminar
                </button>
              ) : (
                <button
                  className="btn btn-primary rounded-pill"
                  onClick={handleSave}
                  data-bs-dismiss="modal"
                >
                  <i className="bi bi-save-fill"></i> Guardar
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTable;