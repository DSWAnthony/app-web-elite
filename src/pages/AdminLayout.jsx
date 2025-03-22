
import { useState } from "react";
import { Button, Layout, theme, Affix } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import Logo from "../components/sidebar/Logo";
import MenuList from "../components/sidebar/MenuList";
import { Outlet } from "react-router-dom";
const { Header, Sider, Content } = Layout;

const AdminLayout = () => {
  const [collapse, setCollapse] = useState(false);
  const { token: { colorBgContainer } } = theme.useToken();

  return (
    <Layout>
      <Affix offsetTop={0}>
        <Sider trigger={null} collapsible collapsed={collapse} className="sidebar">
          <Logo />
          <MenuList />
        </Sider>
      </Affix>
      
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            className="toogle"
            onClick={() => setCollapse(!collapse)}
            icon={collapse ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          />
        </Header>
        
        <Content style={{ padding: "16px" }}>
          <Outlet /> {/* Aquí se renderizarán las rutas hijas */}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;