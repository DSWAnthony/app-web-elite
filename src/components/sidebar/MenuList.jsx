import { Menu } from 'antd';
import React from 'react';
import { DropboxOutlined, TruckOutlined, HomeOutlined, SettingOutlined } from '@ant-design/icons';
import { Link, useLocation } from "react-router-dom";

const MenuList = () => {
  const location = useLocation();

  const items = [
    { key: "/", icon: <HomeOutlined />, label: <Link to="/">Inicio</Link> },
    {
      key: "actividad",
      icon: <HomeOutlined />,
      label: "Actividad",
      children: [
        { key: "/actividad/general", label: <Link to="/actividad/general">General</Link> },
        { key: "/actividad/detalle", label: <Link to="/actividad/detalle">Detalle</Link> },
      ],
    },
    { key: "/productos", icon: <DropboxOutlined />, label: <Link to="/productos">Productos</Link> },
    { key: "/proveedores", icon: <TruckOutlined />, label: <Link to="/proveedores">Proveedores</Link> },
    { key: "/configuracion", icon: <SettingOutlined />, label: <Link to="/configuracion">Configuración</Link> },
  ];

  return (
    <Menu
      theme="dark"
      className="menu-bar"
      mode="inline"
      selectedKeys={[location.pathname]}
      items={items}
    />
  );
};

export default MenuList;
