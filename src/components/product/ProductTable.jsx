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
    <>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>First</th>
            <th>Last</th>
            <th>Handle</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <th>{product.id}</th>
              <td>{product.first}</td>
              <td>{product.last}</td>
              <td>{product.handle}</td>
              <td>
                <button
                  className="btn btn-warning me-2"
                  onClick={() => {
                    setModalType("Editar");
                    setFormData(product);
                  }}
                  data-bs-toggle="modal"
                  data-bs-target="#modal"
                >
                  Editar
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    setModalType("Eliminar");
                    setSelectedProduct(product);
                  }}
                  data-bs-toggle="modal"
                  data-bs-target="#modal"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Botón para agregar producto */}
      <div className="d-flex justify-content-center mb-3">
        <button
          className="btn btn-primary"
          onClick={() => {
            setModalType("Agregar");
            setFormData({ id: "", first: "", last: "", handle: "" });
          }}
          data-bs-toggle="modal"
          data-bs-target="#modal"
        >
          Agregar Producto
        </button>
      </div>

      {/* MODAL GENERAL */}
      <div className="modal fade" id="modal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{modalType} Producto</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              {modalType === "Eliminar" ? (
                <p>¿Seguro que quieres eliminar a <b>{selectedProduct?.first} {selectedProduct?.last}</b>?</p>
              ) : (
                <>
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" name="first" value={formData.first} onChange={handleChange} placeholder="Nombre"/>
                    <label>First</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" name="last" value={formData.last} onChange={handleChange} placeholder="Apellido"/>
                    <label>Last</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" name="handle" value={formData.handle} onChange={handleChange} placeholder="Handle"/>
                    <label>Handle</label>
                  </div>
                </>
              )}
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
              {modalType === "Eliminar" ? (
                <button className="btn btn-danger" onClick={handleDelete} data-bs-dismiss="modal">Sí, eliminar</button>
              ) : (
                <button className="btn btn-primary" onClick={handleSave} data-bs-dismiss="modal">Guardar</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductTable;
