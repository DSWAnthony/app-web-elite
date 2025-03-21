import React from "react";
import ProductForm from "./ProductForm";
import ConfirmDelete from "./ComfirmDelete";

const ProductModal = ({ modalType, formData, selectedProduct, form, inventory }) => {
  const handleSave = () => {
    inventory.saveProduct(formData, form.imagen, form);
  };

  return (
    <div className="modal fade" id="modal" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content border-0 shadow-lg">
          <div
            className="modal-header"
            style={{ backgroundColor: "#3498db", color: "#fff" }}
          >
            <h5 className="modal-title">{modalType} Producto</h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
            ></button>
          </div>
          <div className="modal-body">
            {form.errorMessage && (
              <div className="alert alert-danger">{form.errorMessage}</div>
            )}
            
            {modalType === "Eliminar" ? (
              <ConfirmDelete selectedProduct={selectedProduct} />
            ) : (
              <ProductForm
                form={form}
              />
            )}
          </div>
          <div className="modal-footer">
            <button
              className="btn btn-secondary rounded-pill"
              data-bs-dismiss="modal"
              disabled={form.loading}
            >
              <i className="bi bi-x-lg"></i> Cancelar
            </button>
            {modalType === "Eliminar" ? (
              <button
                className="btn btn-danger rounded-pill"
                onClick={inventory.deleteProduct}
                data-bs-dismiss="modal"
                disabled={form.loading}
              >
                <i className="bi bi-trash-fill"></i> Sí, eliminar
              </button>
            ) : (
              <button
                className="btn btn-primary rounded-pill"
                onClick={handleSave}
                disabled={form.loading}
              >
                {form.loading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Guardando...
                  </>
                ) : (
                  <>
                    <i className="bi bi-save-fill"></i> Guardar
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;