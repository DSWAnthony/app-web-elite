import { Menu } from 'antd'
import React from 'react'
import {DropboxOutlined, TruckOutlined, HomeOutlined} from '@ant-design/icons'
import { Link, useLocation } from "react-router-dom";

const MenuList = () => {
  const location = useLocation();

  return (
    <Menu
      theme="dark"
      className="menu-bar"
      mode="inline"
      selectedKeys={[location.pathname]}
    >
      <Menu.Item key="/" icon={<HomeOutlined />}>
        <Link to="/">Inicio</Link>
      </Menu.Item>

      <Menu.Item key="/actividad" icon={<HomeOutlined />}>
        <Link to="/actividad">Actividad</Link>
      </Menu.Item>

      <Menu.Item key="/productos" icon={<DropboxOutlined />}>
        <Link to="/productos">Productos</Link>
      </Menu.Item>

      <Menu.Item key="/proveedores" icon={<TruckOutlined />}>
        <Link to="/proveedores">Proveedores</Link>
      </Menu.Item>

      <Menu.Item key="/configuracion" icon={<HomeOutlined />}>
        <Link to="/configuracion">Configuración</Link>
      </Menu.Item>
    </Menu>
  )
}

export default MenuList