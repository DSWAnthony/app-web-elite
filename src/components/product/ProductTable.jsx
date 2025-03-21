import React from "react";
import ProductList from "./ProductList";
import ProductModal from "./ProductModal";
import { useProductForm } from "../../hooks/useProductForm";
import { useProductInventory } from "../../hooks/useProductInventory";

const ProductTable = () => {
  const form = useProductForm();
  const inventory = useProductInventory();

  return (
    <div className="container mt-5">
      {/* Título */}
      <h1
        className="text-center mb-4"
        style={{ color: "#2c3e50", fontWeight: "bold" }}
      >
        Inventario de Calzado
      </h1>

      {/* Botón para agregar producto */}
      <div className="text-center mt-4">
        <button
          className="btn btn-primary btn-lg rounded-pill"
          style={{
            backgroundColor: "#3498db",
            border: "none",
            padding: "10px 20px",
          }}
          onClick={() => inventory.openAddModal(form.resetForm)}
          data-bs-toggle="modal"
          data-bs-target="#modal"
        >
          <i className="bi bi-plus-lg"></i> Agregar Calzado
        </button>
      </div>

      {/* Tabla de productos */}
      <ProductList
        products={inventory.products}
        onEdit={(product) => inventory.openEditModal(product, form.populateFormForEdit)}
        onDelete={(product) => inventory.openDeleteModal(product)}
      />

      {/* Modal */}
      <ProductModal
        modalType={inventory.modalType}
        formData={form.formData}
        selectedProduct={inventory.selectedProduct}
        form={form}
        inventory={inventory}
      />
    </div>
  );
};

export default ProductTable;