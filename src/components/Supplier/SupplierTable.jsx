import React, { useState } from "react";

const TablaProveedores = () => {
  const [proveedores, setProveedores] = useState([
    { Id: 1, Nombre: "Tottus", Ruc: "20555555555", Correo: "contacto@tottus.com" },
    { Id: 2, Nombre: "Plaza Vea", Ruc: "20666666666", Correo: "info@plazavea.com" },
    { Id: 3, Nombre: "Metro", Ruc: "20777777777", Correo: "atencion@metro.com" },
  ]);

  const [tipoModal, setTipoModal] = useState("");
  const [proveedorSeleccionado, setProveedorSeleccionado] = useState(null);
  const [formularioDatos, setFormularioDatos] = useState({ Id: "", Nombre: "", Ruc: "", Correo: "" });
  const [terminoBusqueda, setTerminoBusqueda] = useState("");

  const handleChange = (e) => {
    setFormularioDatos({ ...formularioDatos, [e.target.name]: e.target.value });
  };

  const handleSearch = (e) => {
    setTerminoBusqueda(e.target.value);
  };

  const handleGuardar = () => {
    if (tipoModal === "Agregar") {
      setProveedores([...proveedores, { ...formularioDatos, Id: proveedores.length + 1 }]);
    } else {
      setProveedores(proveedores.map((p) => (p.Id === formularioDatos.Id ? formularioDatos : p)));
    }
    setTipoModal("");
  };

  const handleEliminar = () => {
    setProveedores(proveedores.filter((p) => p.Id !== proveedorSeleccionado.Id));
    setTipoModal("");
  };

  const proveedoresFiltrados = proveedores.filter((proveedor) =>
    proveedor.Nombre.toLowerCase().includes(terminoBusqueda.toLowerCase())
  );

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
            setFormularioDatos({ Id: "", Nombre: "", Ruc: "", Correo: "" });
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
          {proveedoresFiltrados.map((proveedor) => (
            <tr key={proveedor.Id}>
              <th>{proveedor.Id}</th>
              <td>{proveedor.Nombre}</td>
              <td>{proveedor.Ruc}</td>
              <td>{proveedor.Ruc}</td>
              <th>{proveedor.Id}</th>
              <th>{proveedor.Id}</th>
              <td>{proveedor.Correo}</td>
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
                  ¿Seguro que quieres eliminar a <b>{proveedorSeleccionado?.Nombre}</b>?
                </p>
              ) : (
                <>
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" name="Nombre" value={formularioDatos.Nombre} onChange={handleChange} placeholder="Nombre" />
                    <label>Nombre</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" name="Ruc" value={formularioDatos.Ruc} onChange={handleChange} placeholder="RUC" />
                    <label>RUC</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="email" className="form-control" name="Correo" value={formularioDatos.Correo} onChange={handleChange} placeholder="Correo" />
                    <label>Correo</label>
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
