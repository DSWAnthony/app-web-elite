import React, { useState } from "react";
import { Button, Layout, theme, Affix } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import Logo from "./components/sidebar/Logo";
import MenuList from "./components/sidebar/MenuList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Paginas
import HomePage from "./pages/HomePage";;
import ProductosPage from "./pages/ProductPage"
import SupplierPage from "./pages/SupplierPage";

const { Header, Sider, Content } = Layout;

const App = () => {
  const [collapse, setCollapse] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Router>
      <Layout>
        
        {/* Barra de Navegacion */}
        <Affix offsetTop={0}>
        <Sider trigger={null} collapsible collapsed={collapse} className="sidebar">
          <Logo />
          <MenuList />
        </Sider>
        </Affix>

        <Layout>
          
          {/* Cabezera de la Pagina */}
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <Button
              type="text"
              className="toogle"
              onClick={() => setCollapse(!collapse)}
              icon={collapse ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            />
          </Header>

          {/* Contenido de Cada Seccion  */}
          <Content style={{ padding: "16px" }}>

            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/productos" element={<ProductosPage />} />
              <Route path="/proveedores" element={<SupplierPage />} /> 
            </Routes>

          </Content>

        </Layout>

      </Layout>
    </Router>
  );
};

export default App;
