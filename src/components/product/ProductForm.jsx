import React, { useState } from "react";

const ProductForm = ({ form }) => {
  const { 
    formData, 
    showOptions, 
    handleInputChange, 
    handleSelectChange,
    handleFileChange,
    handleSwitchChange
  } = form;

  return (
    <>
      {/* Fila: Modelo y Género */}
      <div className="mb-3">
        <div className="row">
          <div className="col">
            <label className="form-label">Modelo</label>
            <input
              type="text"
              className="form-control"
              name="modelo"
              value={formData.zapato.modelo.nombre || ""}
              onChange={handleInputChange}
              placeholder="Modelo"
            />
          </div>
          <div className="col">
            <label className="form-label">Género</label>
            <input
              type="text"
              className="form-control"
              name="genero"
              value={formData.zapato.modelo.genero || ""}
              onChange={handleInputChange}
              placeholder="Género"
            />
          </div>
        </div>
      </div>

      {/* Fila: Marca y Categoría */}
      <div className="mb-3">
        <div className="row">
          {/* Marca */}
          <div className="col">
            <FormSwitchField
              label="Marca"
              name="agregarMarca"
              checked={showOptions.agregarMarca}
              onChange={handleSwitchChange}
              renderField={() => showOptions.agregarMarca ? (
                <input
                  type="text"
                  className="form-control"
                  name="marca"
                  onChange={handleInputChange}
                  placeholder="Nueva marca"
                />
              ) : (
                <select 
                  className="form-select mt-2" 
                  name="marca_id"
                  onChange={handleSelectChange}
                  aria-label="Selecciona una marca"
                >
                  <option value="">Selecciona una marca</option>
                  <option value="1">Nike</option>
                  <option value="2">Reebok</option>
                  <option value="3">Adidas</option>
                </select>
              )}
            />
          </div>
          {/* Categoría */}
          <div className="col">
            <FormSwitchField
              label="Categoría"
              name="agregarCategoria"
              checked={showOptions.agregarCategoria}
              onChange={handleSwitchChange}
              renderField={() => showOptions.agregarCategoria ? (
                <input
                  type="text"
                  className="form-control"
                  name="categoria"
                  onChange={handleInputChange}
                  placeholder="Nueva categoría"
                />
              ) : (
                <select 
                  className="form-select mt-2" 
                  name="categoria_id"
                  onChange={handleSelectChange}
                  aria-label="Selecciona una categoría"
                >
                  <option value="">Selecciona una categoría</option>
                  <option value="1">Deportivo</option>
                  <option value="2">Urbano</option>
                  <option value="3">Casual</option>
                </select>
              )}
            />
          </div>
        </div>
      </div>

      {/* Proveedor */}
      <div className="mb-3">
        <div className="row">
          <div className="col">
            <label className="form-label">Proveedor</label>
            <select 
              className="form-select mt-2" 
              name="proveedor_id"
              onChange={handleSelectChange}
              value={formData.ingreso.proveedor_id || ""}
              aria-label="Selecciona un proveedor"
            >
              <option value="">Selecciona un proveedor</option>
              <option value="2">Deportivos SA</option>
              <option value="3">Urban Style</option>
              <option value="4">SportsWorld</option>
              <option value="5">ShoeDistributors</option>
              <option value="6">Footwear Inc</option>
              <option value="7">RunFast Perú	</option>
            </select>
          </div>
        </div>
      </div>

      {/* Imagen */}
      <div className="mb-3">
        <label htmlFor="formFile" className="form-label">
          Imagen
        </label>
        <input
          className="form-control mt-2 form-control-md"
          type="file"
          id="formFile"
          accept="image/*"
          onChange={handleFileChange}
        />
      </div>

      {/* Detalles del producto */}
      <FormSection title="Detalles del producto">
        {/* Fila: Talla y Color */}
        <div className="row">
          <div className="col">
            <label className="form-label">Talla</label>
            <input
              type="number"
              step="0.5"
              className="form-control"
              name="talla"
              value={formData.zapato.talla || ""}
              onChange={handleInputChange}
              placeholder="Talla"
            />
          </div>
          <div className="col">
            <label className="form-label">Color</label>
            <input
              type="text"
              className="form-control"
              name="color"
              value={formData.zapato.color || ""}
              onChange={handleInputChange}
              placeholder="Color"
            />
          </div>
        </div>
      </FormSection>

      {/* Información de inventario */}
      <FormSection title="Información de inventario">
        {/* Fila: Stock y Precio De Compra */}
        <div className="row">
          <div className="col">
            <label className="form-label">Stock</label>
            <input
              type="number"
              className="form-control"
              name="stock"
              value={formData.cantidad || ""}
              onChange={handleInputChange}
              placeholder="Stock"
            />
          </div>
          <div className="col">
            <label className="form-label">Precio De Compra</label>
            <input
              type="number"
              step="0.01"
              className="form-control"
              name="precioCompra"
              value={formData.precio_compra || ""}
              onChange={handleInputChange}
              placeholder="Precio De Compra"
            />
          </div>
        </div>

        {/* Precio Unidad */}
        <div className="mb-3 mt-3">
          <div className="row">
            <div className="col">
              <label className="form-label">Precio Unidad</label>
              <input
                type="number"
                step="0.01"
                className="form-control"
                name="precioUnidad"
                value={formData.zapato.precioComercial || ""}
                onChange={handleInputChange}
                placeholder="Precio Unidad"
              />
            </div>
            <div className="col">
              <label htmlFor="datepicker" className="form-label">Fecha de Ingreso</label>
              <input type="date" className="form-control" id="datepicker" name="fechaIngreso"
               onChange={ handleSelectChange } value={formData.ingreso.fecha_ingreso}/>
            </div>
          </div>
        </div>
      </FormSection>

      {/* Asignar Almacen */}
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="switchAlmacen"
          name="asignarAlmacen"
          checked={showOptions.asignarAlmacen}
          onChange={handleSwitchChange}
        />
        <label className="form-check-label" htmlFor="switchAlmacen">
          Asignar Almacén
        </label>
      </div>
      {showOptions.asignarAlmacen && (
        <div className="mb-3">
          <select 
            className="form-select mt-2 w-50" 
            name="almacen_id"
            onChange={handleSelectChange}
            aria-label="Selecciona un almacén"
          >
            <option value="">Selecciona un almacén</option>
            <option value="1">Almacén Central</option>
            <option value="2">Sucursal Norte</option>
            <option value="3">Sucursal Sur</option>
          </select>
        </div>
      )}
    </>
  );
};

const FormSection = ({ title, children }) => (
  <div className="mb-4">
    <h6 className="text-muted mb-3 border-bottom pb-2">{title}</h6>
    {children}
  </div>
);

const FormSwitchField = ({ label, name, checked, onChange, renderField }) => (
  <>
    <div className="d-flex justify-content-between align-items-center">
      <label className="form-check-label" htmlFor={`switch${name}`}>
        {label}
      </label>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id={`switch${name}`}
          name={name}
          checked={checked}
          onChange={onChange}
        />
      </div>
    </div>
    {renderField()}
  </>
);

export default ProductForm;