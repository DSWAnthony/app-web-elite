import React from "react";
import ProductList from "./ProductList";
import ProductModal from "./ProductModal";
import { useProductForm } from "../../hooks/useProductForm";
import { useProductInventory } from "../../hooks/useProductInventory";

const ProductTable = (inventario) => {
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


      <div className="d-flex justify-content-between mb-3">
        <input
          type="text"
          className="form-control w-25"
          placeholder="Buscar por nombre..."
          // value={terminoBusqueda}
          // onChange={handleSearch}
        />
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#modal"
          onClick={() => inventory.openAddModal(form.resetForm)}
        >
          Añadir
        </button>
      </div>

      {/* Tabla de productos */}
      <ProductList
      inventario={inventario}
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