import React, { useState } from "react";
import { crearProveedor, editarProveedor, eliminarProveedor } from "../../services/dashboard/supplierServices";

const TablaProveedores = ({proveedores}) => {

  const [tipoModal, setTipoModal] = useState("");
  const [proveedorSeleccionado, setProveedorSeleccionado] = useState(null);
  const [formularioDatos, setFormularioDatos] = useState({  nombre: "", ruc: "", contacto: "",email: "",telefono: "" ,direccion: ""});
  const [terminoBusqueda, setTerminoBusqueda] = useState("");

  const handleChange = (e) => {
    setFormularioDatos({ ...formularioDatos, [e.target.name]: e.target.value });
  };

  const handleSearch = (e) => {
    setTerminoBusqueda(e.target.value);
  };

  const handleGuardar = async() => {
    if (tipoModal === "Agregar") {  
      await crearProveedor(formularioDatos)
    } else {
      await editarProveedor(formularioDatos.proveedor_id,formularioDatos)
    }
    setTipoModal("");
  };

  const handleEliminar = async() => {
    await eliminarProveedor(proveedorSeleccionado.proveedor_id);
    setTipoModal("");
  };



  return (
    <>
      {/* Barra de búsqueda y boton agregar*/}
      <div className="d-flex justify-content-between mb-3">
        <input
          type="text"
          className="form-control w-25"
          placeholder="Buscar por nombre..."
          value={terminoBusqueda}
          onChange={handleSearch}
        />
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#modal"
          onClick={() => {
            setTipoModal("Agregar");
            setFormularioDatos({  nombre: "", ruc: "", contacto: "",email: "",telefono: "" ,direccion: ""});
          }}
        >
          Añadir
        </button>
      </div>
      {/*----------------------------------------------------------------------------------*/}


      {/* Tabla */}
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">NOMBRE</th>
            <th scope="col">RUC</th>
            <th scope="col">DIRECCION</th>
            <th scope="col">CONTACTO</th>
            <th scope="col">EMAIL</th>
            <th scope="col">TELEFONO</th>
            <th scope="col">ACCIONES</th>
          </tr>
        </thead>
        <tbody>
          {proveedores.map((proveedor) => (
            <tr key={proveedor.proveedor_id}>
              <th>{proveedor.proveedor_id}</th>
              <td>{proveedor.nombre}</td>
              <td>{proveedor.ruc}</td>
              <td>{proveedor.contacto}</td>
              <th>{proveedor.telefono}</th>
              <th>{proveedor.email}</th>
              <td>{proveedor.direccion}</td>
              <td className="acciones">
                <div>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      setTipoModal("Eliminar");
                      setProveedorSeleccionado(proveedor);
                    }}
                    data-bs-toggle="modal"
                    data-bs-target="#modal"
                  >
                    Eliminar
                  </button>
                  <button
                    className="btn btn-warning"
                    onClick={() => {
                      setTipoModal("Editar");
                      setFormularioDatos(proveedor);
                    }}
                    data-bs-toggle="modal"
                    data-bs-target="#modal"
                  >
                    Editar
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/*----------------------------------------------------------------------------------*/}


      {/* Modal */}
      <div className="modal fade" id="modal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{tipoModal} Proveedor</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              {tipoModal === "Eliminar" ? (
                <p>
                  ¿Seguro que quieres eliminar a <b>{proveedorSeleccionado?.nombre}</b>?
                </p>
              ) : (
                <>
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" name="nombre" value={formularioDatos.nombre} onChange={handleChange} placeholder="Nombre" />
                    <label>Nombre</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" name="ruc" value={formularioDatos.ruc} onChange={handleChange} placeholder="RUC" />
                    <label>RUC</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" name="direccion" value={formularioDatos.direccion} onChange={handleChange} placeholder="Direccion" />
                    <label>Direccion</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" name="contacto" value={formularioDatos.contacto} onChange={handleChange} placeholder="Contacto" />
                    <label>Contacto</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="email" className="form-control" name="email" value={formularioDatos.email} onChange={handleChange} placeholder="Email" />
                    <label>Email</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" name="telefono" value={formularioDatos.telefono} onChange={handleChange} placeholder="Telefono" />
                    <label>Numero</label>
                  </div>
                </>
              )}
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
              {tipoModal === "Eliminar" ? (
                <button className="btn btn-danger" onClick={handleEliminar} data-bs-dismiss="modal">Sí, eliminar</button>
              ) : (
                <button className="btn btn-primary" onClick={handleGuardar} data-bs-dismiss="modal">Guardar</button>
              )}
            </div>
          </div>
        </div>
      </div>
      {/*----------------------------------------------------------------------------------*/}

    </>
  );
};

export default TablaProveedores;
