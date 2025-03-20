import React from 'react'

const SupplierTable = () => {
  return (
    <>
    <table className="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">NOMBRE</th>
      <th scope="col">RUC</th>
      <th scope="col">CORREO</th>
      <th scope="col">ACCIONES</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td className="acciones">
        <div>
          <button className="btn btn-danger">Eliminar</button>
          <button className="btn btn-warning">Editar</button>
         </div>
      </td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td className="acciones">
        <div>
          <button className="btn btn-danger">Eliminar</button>
          <button className="btn btn-warning">Editar</button>
         </div>
      </td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
      <td className="acciones">
        <div>
          <button className="btn btn-danger">Eliminar</button>
          <button className="btn btn-warning">Editar</button>
         </div>
      </td>
    </tr>
  </tbody>
</table>

{/*Este es el MODAL*/}

{/*EL BUTTON DEL MODAL*/}

<div className="d-flex justify-content-center mb-3">
  <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    AGREGAR PROVEEDOR
  </button>
</div>

<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Agregar Proveedor</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        {/*Este es el FORMULARIO*/}

        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="floatingName" placeholder="Ingrese su nombre"/>
          <label for="floatingName">Nombre</label>
        </div>
        <div class="form-floating mb-3">
          <input type="number" class="form-control" id="floatingNumber" name="numero" placeholder="Ingrese su número"/>
          <label for="floatingNumber">RUC</label>
        </div>
        <div class="form-floating mb-3">
          <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
          <label for="floatingInput">CORREO</label>
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button type="button" className="btn btn-primary">Guardar Cambios</button>
      </div>
    </div>
  </div>
</div>

</>
  )
}

export default SupplierTable
