import { Menu } from 'antd';
import React from 'react';
import { DropboxOutlined, TruckOutlined, HomeOutlined } from '@ant-design/icons';
import { Link, useLocation } from "react-router-dom";

const MenuList = () => {
  const location = useLocation();

  const items = [
    { key: "/dashboard", icon: <HomeOutlined />, label: <Link to="/dashboard">Inicio</Link> },
    { key: "/inventario", icon: <DropboxOutlined />, label: <Link to="/inventario">Inventario</Link> },
    { key: "/proveedores", icon: <TruckOutlined />, label: <Link to="/proveedores">Proveedores</Link> },
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
