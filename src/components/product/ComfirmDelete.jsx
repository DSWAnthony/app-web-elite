import React from "react";

const ConfirmDelete = ({ selectedProduct }) => {
  return (
    <p className="lead">
      ¿Seguro que quieres eliminar a{" "}
      <b>
        {selectedProduct?.first} {selectedProduct?.last}
      </b>
      ?
    </p>
  );
};

export default ConfirmDelete;
